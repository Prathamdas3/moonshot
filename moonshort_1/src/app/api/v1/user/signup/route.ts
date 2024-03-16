import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { userSchema } from "@/utils/zodSchema";
import bcrypt from "bcrypt";
type user = {
  name: string;
  email: string;
  password: string;
};
export async function POST(req: Request) {
  try {
    const body: user = await req.json();

    const parseResult = userSchema.safeParse(body);
    if (!parseResult.success) {
      console.log(parseResult.error);
      return NextResponse.json({ error: "Invalid Input" }, { status: 400 });
    }

    const { name, password, email } = parseResult.data;

    const hashedPassword: string = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name,
        password: hashedPassword,
        email,
      },
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    console.error("Problem in User creation", error);
  }
}
