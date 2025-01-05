import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function DELETE(req: NextRequest) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
    }

    const blobPath = `uploads/image-${id}.png`;

    await del(blobPath);

    return NextResponse.json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
  }
}
