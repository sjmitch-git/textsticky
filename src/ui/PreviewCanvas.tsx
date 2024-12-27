"use client";

import React, { useEffect, useRef } from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import CreateButton from "@/ui/CreateButton";

export default function PreviewCanvas() {
  const { text, foregroundColor, backgroundColor, dimensions, fontSize, fontFamily } =
    useFormContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set the background color
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the text properties
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = foregroundColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Split the text into lines and draw each line
        const lines = text.split("\n");
        const lineHeight = fontSize * 1.2; // Adjust line height as needed
        const x = canvas.width / 2;
        const y = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, index) => {
          ctx.fillText(line, x, y + index * lineHeight);
        });
      }
    }
  }, [canvasRef, text, foregroundColor, backgroundColor, dimensions, fontSize, fontFamily]);

  return (
    <div>
      <div
        className={`relative overflow-hidden w-full mx-auto aspect-[${dimensions.width}/${dimensions.height}]`}
      >
        <canvas
          className="w-full h-full"
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
      <CreateButton canvasRef={canvasRef} />
    </div>
  );
}
