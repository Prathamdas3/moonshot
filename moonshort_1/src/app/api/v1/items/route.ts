import { db } from "@/server/db";
import { NextResponse } from "next/server";
import { itemSchema } from "@/utils/zodSchema";

export async function GET() {
  try {
    const items = await db.items.findMany();
    return NextResponse.json({ data: items }, { status: 200 });
  } catch (error: any) {
    console.error(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parseResult = itemSchema.safeParse(body);
    if (!parseResult.success) {
      console.log(parseResult.error);
      return NextResponse.json({ error: "Invalid Input" }, { status: 400 });
    }
    await db.items.create({ data: { ...parseResult.data } });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error(error);
  }
}
