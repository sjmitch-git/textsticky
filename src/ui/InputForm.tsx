"use client";

import React from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import { Aspects } from "@/lib/types";
import { fonts } from "@/lib/data/fonts";

export default function InputForm() {
  const {
    text,
    setText,
    foregroundColor,
    setForegroundColor,
    backgroundColor,
    setBackgroundColor,
    setDimensions,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    aspect,
    setAspect,
  } = useFormContext();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleForegroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForegroundColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleAspectsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAspect = e.target.value;
    if (selectedAspect && Aspects[selectedAspect]) {
      setAspect(e.target.value);
      setDimensions(Aspects[selectedAspect]);
    }
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(e.target.value));
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  return (
    <form>
      <div>
        <label>Text:</label>
        <textarea value={text} onChange={handleTextChange} />
      </div>
      <div>
        <label>Foreground Color:</label>
        <input type="color" value={foregroundColor} onChange={handleForegroundColorChange} />
      </div>
      <div>
        <label>Background Color:</label>
        <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
      </div>
      <div>
        <label>Aspects:</label>
        <select onChange={handleAspectsChange} value={aspect}>
          <option value="">Select a preset</option>
          {Object.keys(Aspects).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Font Size:</label>
        <input type="range" min="18" max="200" value={fontSize} onChange={handleFontSizeChange} />
        <span>{fontSize}px</span>
      </div>
      <div>
        <label>Font Family:</label>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
