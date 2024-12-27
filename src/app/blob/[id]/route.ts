import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";
import axios from "axios";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "Blob ID is required" }, { status: 400 });
  }

  const folderPath = `textsticky/${id}/`;

  try {
    const listOfBlobs = await list({
      prefix: folderPath,
    });

    if (listOfBlobs.blobs.length === 0) {
      return NextResponse.json({ error: "Blob not found" }, { status: 404 });
    }
    const blob = listOfBlobs.blobs[0];

    if (!blob) {
      return NextResponse.json({ error: "Blob not found" }, { status: 404 });
    }

    const response = await axios.get(blob.url, { responseType: "arraybuffer" });
    const base64Image = Buffer.from(response.data).toString("base64");

    return NextResponse.json({ base64Image });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch blob data" }, { status: 500 });
  }
}
