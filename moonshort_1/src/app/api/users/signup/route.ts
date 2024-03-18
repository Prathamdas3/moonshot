import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { userSchema } from "@/utils/zodSchema";
import bcrypt from "bcrypt";

type user = {
  name: string;
  email: string;
  password: string;
};

export type returnUser = {
  name: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as user;

    const parseResult = userSchema.safeParse(body);
    if (!parseResult.success)
      return NextResponse.json({ error: "Invalid Input" }, { status: 400 });

    const { name, password, email } = parseResult.data;

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        password: hashedPassword,
        email,
      },
    });
    const returningUser = { name: newUser.name, email: newUser.email };

    return NextResponse.json(
      { success: true, message: "User created successfully", returningUser },
      { status: 201 },
    );
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
