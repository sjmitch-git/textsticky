"use client";

import React, { useEffect, useRef } from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import UploadButton from "@/ui/UploadButton";

export default function PreviewCanvas() {
  const {
    text,
    foregroundColor,
    backgroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeWidth,
    strokeColor,
  } = useFormContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = foregroundColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColor;

        const lines = text.split("\n");
        const lineHeight = fontSize * 1.2;
        const x = canvas.width / 2;
        const y = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, index) => {
          const lineY = y + index * lineHeight;

          if (strokeWidth > 0) {
            ctx.strokeText(line, x, lineY);
          }

          ctx.fillText(line, x, lineY);
        });
      }
    }
  }, [
    canvasRef,
    text,
    foregroundColor,
    backgroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeWidth,
    strokeColor,
  ]);

  return (
    <div className="sticky md:static top-4">
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
      <div className="flex justify-center sticky bottom-4 pt-4">
        <UploadButton canvasRef={canvasRef} />
      </div>
    </div>
  );
}
