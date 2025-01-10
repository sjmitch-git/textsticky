"use client";

import React from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import { Colors } from "@/lib/constants";
import SelectAspect from "@/ui/SelectAspect";
import SelectFontFamily from "@/ui/SelectFontFamily";
import ColorInput from "@/ui/ColorInput";
import { Aspects } from "@/lib/types";
import { TextArea, RangeInput } from "@/lib/fluid";

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
    strokeWidth,
    setStrokeWidth,
    strokeColor,
    setStrokeColor,
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

  const handleStrokeColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(e.target.value);
  };

  const handleAspectsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAspect = e.target.value;
    if (selectedAspect && Aspects[selectedAspect]) {
      setAspect(e.target.value);
      setDimensions(Aspects[selectedAspect]);
    }
  };

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  const handleStrokeWidthChange = (value: number) => {
    setStrokeWidth(value);
  };

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  return (
    <form className="order-1 md:order-none">
      <div className="space-y-4 border border-neutral-300 p-4">
        <div>
          <TextArea
            label="Text:"
            placeholder="Add your text here"
            value={text}
            onChange={handleTextChange}
            rows={3}
            resize={true}
            maxLength={200}
            layout="col"
            size="md"
            textAreaStyles="border-2 border-neutral-300 focus:border-info"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <ColorInput
              label="Text"
              name="textcolor"
              value={foregroundColor}
              onChange={handleForegroundColorChange}
            />
          </div>
          <div>
            <ColorInput
              label="Stroke"
              name="strokecolor"
              value={strokeColor}
              onChange={handleStrokeColorChange}
            />
          </div>
          <div>
            <ColorInput
              label="Background"
              name="backgroundcolor"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
          </div>
        </div>
        <div>
          <SelectAspect aspect={aspect} onChange={handleAspectsChange} />
        </div>
        <div>
          <SelectFontFamily onChange={handleFontFamilyChange} font={fontFamily} />
        </div>
        <div>
          <RangeInput
            label="Font Size:"
            min={18}
            max={300}
            step="1"
            defaultValue={fontSize}
            rangeActive={Colors.rangeActive}
            rangeBackground={Colors.rangeBackground}
            thumbnailColor={Colors.thumbnailColor}
            onChange={handleFontSizeChange}
            layout="row"
            hint={false}
          />
        </div>
        <div>
          <RangeInput
            label="Stroke Width:"
            min={0}
            max={20}
            step="1"
            defaultValue={strokeWidth}
            rangeActive={Colors.rangeActive}
            rangeBackground={Colors.rangeBackground}
            thumbnailColor={Colors.thumbnailColor}
            onChange={handleStrokeWidthChange}
            layout="row"
            hint={false}
          />
        </div>
      </div>
    </form>
  );
}
