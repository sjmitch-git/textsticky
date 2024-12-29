"use client";

import React, { createContext, useContext, useState } from "react";

import { FormState, FormContextProps } from "@/lib/types";

const defaultState: FormState = {
  text: "Hello, world!",
  foregroundColor: "#374151",
  backgroundColor: "#d1d5db",
  dimensions: { width: 1024, height: 512 },
  fontSize: 18,
  fontFamily: "Arial",
  aspect: "landscape",
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [text, setText] = useState(defaultState.text);
  const [foregroundColor, setForegroundColor] = useState(defaultState.foregroundColor);
  const [backgroundColor, setBackgroundColor] = useState(defaultState.backgroundColor);
  const [dimensions, setDimensions] = useState(defaultState.dimensions);
  const [fontSize, setFontSize] = useState(defaultState.fontSize);
  const [fontFamily, setFontFamily] = useState(defaultState.fontFamily);
  const [aspect, setAspect] = useState(defaultState.aspect);

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
