import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { loginSchema } from "@/utils/zodSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type user = {
  email: string;
  password: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as user;

    const parsedResult = loginSchema.safeParse(body);
    if (!parsedResult.success) {
      return NextResponse.json({ error: "Invalid Input" }, { status: 400 });
    }

    const { email, password } = parsedResult.data;

    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 },
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: "Wrong Password" }, { status: 401 });
    }

    const tokenData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY!, {
      expiresIn: "1hr",
    });

    const res = NextResponse.json({
      message: "Login Successfully, success:true",
    });
    res.cookies.set("token", token, { httpOnly: true });

    return res;
  } catch (error: unknown) {
    console.error(error);
  }
}
