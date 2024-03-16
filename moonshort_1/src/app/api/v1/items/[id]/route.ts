import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

type reqType = {
  check: boolean;
};
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { check } = (await req.json()) as reqType;
    const id = Number(params.id);
    const item = await db.items.update({
      where: { id },
      data: { check },
    });

    revalidatePath("");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
  }
}
