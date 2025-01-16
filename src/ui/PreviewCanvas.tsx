"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import UploadButton from "@/ui/UploadButton";
import { URLs, MetaData } from "@/lib/constants";

export default function PreviewCanvas() {
  const {
    aspect,
    text,
    foregroundColor,
    backgroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeWidth,
    strokeColor,
    align,
  } = useFormContext();

  const formState = {
    aspect,
    backgroundColor,
    text,
    foregroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeColor,
    strokeWidth,
    align,
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasLoaded, setCanvasLoaded] = useState(false);

  useEffect(() => {
    setCanvasLoaded(true);
    const canvas = canvasRef?.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = foregroundColor;
        ctx.textAlign = align;
        ctx.textBaseline = "middle";

        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColor;

        const lines = text.split("\n");
        const lineHeight = fontSize * 1.2;
        let x = canvas.width / 2;
        if (align === "left") x = 40;
        if (align === "right") x = canvas.width - 40;
        const y = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, index) => {
          const lineY = y + index * lineHeight;

          if (strokeWidth > 0) {
            ctx.strokeText(line, x, lineY);
          }

          ctx.fillText(line, x, lineY);
        });

        const watermarkText = URLs.base?.includes("://")
          ? URLs.base.split("://")[1].replace(/\/$/, "")
          : URLs.base?.replace(/\/$/, "") || MetaData.defaultSitename;
        const watermarkFontSize = 24;
        const watermarkX = canvas.width - 20;
        const watermarkY = canvas.height - 10;

        ctx.font = `${watermarkFontSize}px 'Arial`;
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = foregroundColor;

        ctx.fillText(watermarkText, watermarkX, watermarkY);
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
    align,
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
        {canvasLoaded && <UploadButton canvasRef={canvasRef} formState={formState} />}
      </div>
    </div>
  );
}
