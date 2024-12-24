import React from "react";

import { InputFormProps, presetDimensions } from "@/lib/types";

export default function InputForm({
  text,
  setText,
  foregroundColor,
  setForegroundColor,
  backgroundColor,
  setBackgroundColor,
  dimensions,
  setDimensions,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
}: InputFormProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleForegroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForegroundColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDimensions({ ...dimensions, width: Number(e.target.value) });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDimensions({ ...dimensions, height: Number(e.target.value) });
  };

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPreset = presetDimensions[e.target.value as keyof typeof presetDimensions];
    setDimensions(selectedPreset);
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
        <label>Width:</label>
        <input type="number" value={dimensions.width} onChange={handleWidthChange} />
      </div>
      <div>
        <label>Height:</label>
        <input type="number" value={dimensions.height} onChange={handleHeightChange} />
      </div>
      <div>
        <label>Preset Dimensions:</label>
        <select onChange={handlePresetChange}>
          <option value="">Select a preset</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
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
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Palatino">Palatino</option>
          <option value="Garamond">Garamond</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Impact">Impact</option>
        </select>
      </div>
    </form>
  );
}
