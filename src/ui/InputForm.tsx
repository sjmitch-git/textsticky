"use client";

import React from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import { Colors, Inputs, Labels } from "@/lib/constants";
import RadiosAspect from "@/ui/RadiosAspect";
import SelectFontFamily from "@/ui/SelectFontFamily";
import ColorInput from "@/ui/ColorInput";
import { TextArea, RangeInput } from "@/lib/fluid";
import AlignButtons from "@/ui/AlignButtons";

export default function InputForm() {
  const {
    text,
    setText,
    foregroundColor,
    setForegroundColor,
    backgroundColor,
    setBackgroundColor,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    strokeWidth,
    setStrokeWidth,
    strokeColor,
    setStrokeColor,
  } = useFormContext();

  const { fontsize, strokewidth, compose } = Inputs;
  const { inputs } = Labels;

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
        <div className="relative">
          <div className="absolute right-0 top-0">
          <AlignButtons />
        </div>
        <div>
          <TextArea
            label={inputs.compose}
            placeholder={inputs.composePlaceholder}
            value={text}
            name="compose"
            onChange={handleTextChange}
            rows={compose.rows}
            resize={true}
            maxLength={compose.maxLength}
            layout="col"
            size="md"
            textAreaStyles="border-2 border-neutral-300 focus:border-info"
          />
        </div>
        </div>
        <div className="flex gap-6">
          <div>
            <ColorInput
              label={inputs.textcolor}
              name="textcolor"
              value={foregroundColor}
              onChange={handleForegroundColorChange}
            />
          </div>
          <div>
            <ColorInput
              label={inputs.strokecolor}
              name="strokecolor"
              value={strokeColor}
              onChange={handleStrokeColorChange}
            />
          </div>
          <div>
            <ColorInput
              label={inputs.backgroundcolor}
              name="backgroundcolor"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
          </div>
        </div>
        <div>
          <SelectFontFamily onChange={handleFontFamilyChange} font={fontFamily} />
        </div>
        <div>
          <RangeInput
            label={inputs.fontsize}
            name="fontsize"
            min={fontsize.min}
            max={fontsize.max}
            step="1"
            defaultValue={fontSize}
            rangeActive={Colors.rangeActive}
            rangeBackground={Colors.rangeBackground}
            thumbnailColor={Colors.thumbnailColor}
            thumbnailActiveColor={Colors.thumbnailActiveColor}
            onChange={handleFontSizeChange}
            layout="row"
            hint={false}
          />
        </div>
        <div>
          <RangeInput
            label={inputs.strokewidth}
            name="strokewidth"
            min={strokewidth.min}
            max={strokewidth.max}
            step="1"
            defaultValue={strokeWidth}
            rangeActive={Colors.rangeActive}
            rangeBackground={Colors.rangeBackground}
            thumbnailColor={Colors.thumbnailColor}
            thumbnailActiveColor={Colors.thumbnailActiveColor}
            onChange={handleStrokeWidthChange}
            layout="row"
            hint={false}
          />
        </div>
        <div>
          <RadiosAspect />
        </div>
      </div>
    </form>
  );
}
