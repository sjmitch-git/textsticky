"use client";

import React, { createContext, useContext, useState } from "react";

import { FormState, FormContextProps } from "@/lib/types";

const textTranslations: Record<string, string> = {
  fr: "Salut !",
  es: "¡Hola!",
  ar: "مرحبًا!",
  "zh-CN": "嗨!",
  hi: "हाय!",
  de: "Hi!",
  pt: "Oi!",
  jp: "やあ！",
  ru: "Привет!"
};

export const defaultState: FormState = {
  text: "Hello!",
  foregroundColor: "#374151",
  backgroundColor: "#d1d5db",
  dimensions: { width: 1080, height: 1080 },
  fontSize: 200,
  fontFamily: "Arial",
  aspect: "square",
  strokeWidth: 0,
  strokeColor: "#f7f7f7",
  align: "center",
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ locale: string, children: React.ReactNode }> = ({ locale, children }) => {
  const [text, setText] = useState((textTranslations[locale] || defaultState.text));
  const [foregroundColor, setForegroundColor] = useState(defaultState.foregroundColor);
  const [backgroundColor, setBackgroundColor] = useState(defaultState.backgroundColor);
  const [dimensions, setDimensions] = useState(defaultState.dimensions);
  const [fontSize, setFontSize] = useState(defaultState.fontSize);
  const [fontFamily, setFontFamily] = useState(defaultState.fontFamily);
  const [aspect, setAspect] = useState(defaultState.aspect);
  const [strokeWidth, setStrokeWidth] = useState(defaultState.strokeWidth);
  const [strokeColor, setStrokeColor] = useState(defaultState.strokeColor);
  const [align, setAlign] = useState(defaultState.align);

  return (
    <FormContext.Provider
      value={{
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
        aspect,
        setAspect,
        strokeWidth,
        setStrokeWidth,
        strokeColor,
        setStrokeColor,
        align,
        setAlign,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
