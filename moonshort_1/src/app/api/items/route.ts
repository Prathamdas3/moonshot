import { db } from "@/server/db";
import { NextResponse } from "next/server";
import { data } from "@/utils/faker";

export async function GET() {
  try {
    const items = await db.items.findMany();

    const updatedItems = items.sort((a, b) => a.id - b.id).slice(0, 100);

    return NextResponse.json(updatedItems, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
  }
}

//adding more data to the database

export async function POST(req: Request) {
  try {
    const { id } = (await req.json()) as { id: number };
    const body = await data(id);
    await db.items.createMany({ data: [...body] });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    console.error(error);
  }
}
