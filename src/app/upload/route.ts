import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { base64Image } = await req.json();

    if (!base64Image) {
      return NextResponse.json({ error: "base64Image is required" }, { status: 400 });
    }

    const id = uuidv4();
    const folderPath = `textsticky/${id}/`;

    const buffer = Buffer.from(base64Image.split(",")[1], "base64");

    const { url } = await put(`${folderPath}data.json`, buffer, {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    return NextResponse.json({ id, url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upload data" }, { status: 500 });
  }
}
