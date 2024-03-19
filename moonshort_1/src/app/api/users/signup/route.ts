import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { userSchema } from "@/utils/zodSchema";
import bcrypt from "bcrypt";
import { sendEmail } from "@/utils/email";
import { otp } from "@/utils/faker";

type userType = {
  name: string;
  email: string;
  password: string;
};

export type returnUser = {
  user: number;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as userType;

    const parseResult = userSchema.safeParse(body);
    if (!parseResult.success)
      return NextResponse.json({ error: "Invalid Input" }, { status: 400 });

    const { name, password, email } = parseResult.data;

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const token = await bcrypt.hash(otp, 10);
    await db.user.create({
      data: {
        name,
        password: hashedPassword,
        email,
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 36000,
      },
    });

    const newUser = await db.user.findFirst({
      where: { email },
      select: { id: true },
    });

    await sendEmail({ email, otp });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        user: newUser?.id,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
