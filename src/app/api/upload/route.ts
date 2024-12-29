import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

const MAX_IMAGE_SIZE = 50 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const { base64Image } = await req.json();

    if (!base64Image) {
      return NextResponse.json({ error: "base64Image is required" }, { status: 400 });
    }

    const folderPath = `uploads/`;

    const buffer = Buffer.from(base64Image.split(",")[1], "base64");

    if (buffer.length > MAX_IMAGE_SIZE) {
      return NextResponse.json({ error: "Image size exceeds the 50 MB limit" }, { status: 413 });
    }

    const { url } = await put(`${folderPath}image.png`, buffer, {
      access: "public",
      contentType: "image/png",
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
