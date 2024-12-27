"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CreateButtonProps } from "@/lib/types";

export default function CreateButton({ canvasRef }: CreateButtonProps) {
  const router = useRouter();
  const hasUploaded = useRef(false);

  const handleCreate = async () => {
    if (hasUploaded.current) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const base64Image = canvas.toDataURL("image/avif", 0.8);

      const response = await fetch("/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Image }),
      });

      const data = await response.json();
      const blobId = data.id;

      hasUploaded.current = true;

      router.push(`/share?id=${encodeURIComponent(blobId)}`);
    }
  };

  return <button onClick={handleCreate}>Create and Share</button>;
}
