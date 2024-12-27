import React from "react";
import InputForm from "@/ui/InputForm";
import PreviewCanvas from "@/ui/PreviewCanvas";

export default function Create() {
  return (
    <div>
      <h1>Create</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputForm />
        <PreviewCanvas />
      </div>
    </div>
  );
}
