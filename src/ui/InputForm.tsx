import React from "react";

import { InputFormProps } from "@/lib/types";

export default function InputForm({
  text,
  setText,
  foregroundColor,
  setForegroundColor,
  backgroundColor,
  setBackgroundColor,
  dimensions,
  setDimensions,
}: InputFormProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded w-full max-w-lg">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full resize-none"
        placeholder="Enter your text here..."
      />
      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-bold">Foreground</label>
          <input
            type="color"
            value={foregroundColor}
            onChange={(e) => setForegroundColor(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Background</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-bold">Width</label>
          <input
            type="number"
            value={dimensions.width}
            onChange={(e) => setDimensions({ ...dimensions, width: parseInt(e.target.value) || 0 })}
            className="border p-2 rounded w-full"
            min="100"
          />
        </div>
        <div>
          <label className="block text-sm font-bold">Height</label>
          <input
            type="number"
            value={dimensions.height}
            onChange={(e) =>
              setDimensions({ ...dimensions, height: parseInt(e.target.value) || 0 })
            }
            className="border p-2 rounded w-full"
            min="100"
          />
        </div>
      </div>
    </div>
  );
}
