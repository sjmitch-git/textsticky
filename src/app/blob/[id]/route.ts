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
    console.log("Blobs:", listOfBlobs.blobs);
    listOfBlobs.blobs.forEach((blo) => {
      console.log("Blob list:", blo);
    });

    if (listOfBlobs.blobs.length === 0) {
      return NextResponse.json({ error: "Blob not found" }, { status: 404 });
    }
    const blob = listOfBlobs.blobs[0];

    console.log("Blob:", blob.url);

    if (!blob) {
      return NextResponse.json({ error: "Blob not found" }, { status: 404 });
    }

    try {
      console.log("Fetching blob data from URL:", blob.url);

      const response = await axios.get(blob.url, { responseType: "arraybuffer" });
      const base64Image = Buffer.from(response.data).toString("base64");

      console.log(typeof response.data);

      // const jsonData = response.data;

      // const base64Encoded = Buffer.from(response.data, "base64");

      return NextResponse.json({ base64Image });
    } catch (axiosError: any) {
      throw axiosError;
    }
  } catch (error) {
    console.error("Error fetching blob data:", error);
    return NextResponse.json({ error: "Failed to fetch blob data ROUTE" }, { status: 500 });
  }
}
