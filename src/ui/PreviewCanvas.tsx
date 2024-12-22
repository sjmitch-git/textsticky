import React, { useRef, useEffect } from "react";

import { PreviewCanvasProps } from "@/lib/types";

export default function PreviewCanvas({
  text,
  foregroundColor,
  backgroundColor,
  dimensions,
}: PreviewCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
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
      }
    }
  }, [text, foregroundColor, backgroundColor, dimensions]);

  return <canvas ref={canvasRef} className="border rounded shadow-md" />;
}
