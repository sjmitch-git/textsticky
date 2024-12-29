"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { UploadButtonProps } from "@/lib/types";

export default function UploadButton({ canvasRef }: UploadButtonProps) {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const hasUploaded = useRef(false);

  const handleCreate = async () => {
    if (hasUploaded.current) return;
    hasUploaded.current = true;
    setUploading(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const base64Image = canvas.toDataURL("image/png", 1);

      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Image }),
      });

      const data = await response.json();

      const blobId = data.url.split("image-")[1].split(".png")[0];

      hasUploaded.current = false;
      setUploading(false);

      router.push(`/share?id=${encodeURIComponent(blobId)}`);
    }
  };

  return <button onClick={handleCreate}>{uploading ? "Uploading" : "Upload"}</button>;
}
