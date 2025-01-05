"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { UploadButtonProps } from "@/lib/types";
import { Button } from "@/lib/fluid";
import { FaUpload } from "react-icons/fa";

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

  return (
    <Button
      onClick={handleCreate}
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="md"
      disabled={uploading}
    >
      <FaUpload />
      <span>{uploading ? "Uploading" : "Upload"}</span>
    </Button>
  );
}
