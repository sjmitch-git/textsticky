"use client";

import { useRouter } from "next/navigation";
import { CreateButtonProps } from "@/lib/types";

export default function CreateButton({ canvasRef }: CreateButtonProps) {
  const router = useRouter();

  const handleCreate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Convert canvas to base64
      const base64Image = canvas.toDataURL("image/png");
      // setBase64Image(base64Image);

      if (base64Image.length > 2000) {
        alert(base64Image.length);
        return;
      }

      // Navigate to /share with base64 as param
      router.push(`/share?image=${encodeURIComponent(base64Image)}`);
    }
  };

  return <button onClick={handleCreate}>Create and Share</button>;
}
