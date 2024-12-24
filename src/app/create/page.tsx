"use client";

import { useState, useRef } from "react";
import InputForm from "@/ui/InputForm";
import PreviewCanvas from "@/ui/PreviewCanvas";
import CreateButton from "@/ui/CreateButton";
import { InputFormProps, PreviewCanvasProps, CreateButtonProps } from "@/lib/types";

export default function Create() {
  const [text, setText] = useState("Hello, world! 🌍✨");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Arial");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const inputFormProps: InputFormProps = {
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
  };

  const previewCanvasProps: PreviewCanvasProps = {
    text,
    foregroundColor,
    backgroundColor,
    dimensions,
    fontSize,
    fontFamily,
    canvasRef,
  };

  const createButtonProps: CreateButtonProps = {
    canvasRef,
  };

  return (
    <div>
      <h1>Create</h1>
      <InputForm {...inputFormProps} />
      <PreviewCanvas {...previewCanvasProps} />
      <CreateButton {...createButtonProps} />
    </div>
  );
}
