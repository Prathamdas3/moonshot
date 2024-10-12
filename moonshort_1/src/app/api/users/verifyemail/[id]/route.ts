import { db } from "@/server/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type token = {
  token: string;
};

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  try {
    const { token } = (await req.json()) as token;
    console.log(token);
    const id = Number(params.id);
    console.log(id);

    const user = await db.user.findFirst({
      where: { id },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid token",
        },
        { status: 400 },
      );
    }

    const isValid = await bcrypt.compare(token, user.verifyToken);

    if (isValid === true) {
      await db.user.update({
        where: { id: user.id },
        data: { verifyToken: "", isVerfied: true, verifyTokenExpiry: 0 },
      });
    }

    const tokenData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const cookieToken = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY!, {
      expiresIn: "1hr",
    });

    const res = NextResponse.json({
      message: "Login Successfully, success:true",
    });
    res.cookies.set("token", cookieToken, { httpOnly: true });

    return res;
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
