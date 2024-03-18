import { db } from "@/server/db";
import { NextResponse } from "next/server";
// import { data } from "@/utils/faker";

export async function GET() {
  try {
    const items = await db.items.findMany();
    const updatedItems = items.sort((a, b) => a.id - b.id);
    return NextResponse.json(updatedItems, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
  }
}

//adding more data to the database

// export async function POST(req: Request) {
//   try {
//     console.log(data);
//     await db.items.createMany({ data: [...data] });
//     return NextResponse.json({ success: true }, { status: 201 });
//   } catch (error: unknown) {
//     console.error(error);
//   }
// }
