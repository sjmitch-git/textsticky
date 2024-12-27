// FormContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
// import { presetDimensions } from "@/lib/types";

interface FormState {
  text: string;
  foregroundColor: string;
  backgroundColor: string;
  dimensions: { width: number; height: number };
  fontSize: number;
  fontFamily: string;
}

interface FormContextProps extends FormState {
  setText: React.Dispatch<React.SetStateAction<string>>;
  setForegroundColor: React.Dispatch<React.SetStateAction<string>>;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  setDimensions: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  setFontFamily: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState: FormState = {
  text: "Hello, world! 🌍✨",
  foregroundColor: "#000000",
  backgroundColor: "#ffffff",
  dimensions: { width: 200, height: 200 },
  fontSize: 16,
  fontFamily: "Arial",
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [text, setText] = useState(defaultState.text);
  const [foregroundColor, setForegroundColor] = useState(defaultState.foregroundColor);
  const [backgroundColor, setBackgroundColor] = useState(defaultState.backgroundColor);
  const [dimensions, setDimensions] = useState(defaultState.dimensions);
  const [fontSize, setFontSize] = useState(defaultState.fontSize);
  const [fontFamily, setFontFamily] = useState(defaultState.fontFamily);

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
