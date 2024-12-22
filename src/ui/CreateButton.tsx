import React from "react";

import { CreateButtonProps } from "@/lib/types";

export default function CreateButton({
  text,
  foregroundColor,
  backgroundColor,
  dimensions,
  setBase64Image,
}: CreateButtonProps) {
  const handleCreate = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Set canvas dimensions
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      // Fill background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text
      ctx.fillStyle = foregroundColor;
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Generate base64
      const base64Image = canvas.toDataURL();
      setBase64Image(base64Image);
    }
  };

  return (
    <button
      onClick={handleCreate}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
    >
      Create Base64
    </button>
  );
}
