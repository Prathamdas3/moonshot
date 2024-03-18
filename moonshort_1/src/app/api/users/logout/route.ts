import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json({
      message: "Logout Successfully",
      success: true,
    });
    res.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
