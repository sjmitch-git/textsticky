import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Blob ID is required" }, { status: 400 });
  }

  const imgUrl = `${process.env.BLOB_URL}uploads/image-${id}.png`;

  return NextResponse.json({ imgUrl });
}
