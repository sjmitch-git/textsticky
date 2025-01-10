import React from "react";
import { Label, Input } from "@/lib/fluid";

import { ColorInputProps } from "@/lib/types";

const ColorInput = ({ label, name, value, onChange }: ColorInputProps) => {
  return (
    <div>
      <Label label={label} type="color" layout="row_reverse">
        <Input
          name={name}
          type="color"
          value={value}
          onChange={onChange}
          className="border-neutral-300 border-2"
        />
      </Label>
    </div>
  );
};

export default ColorInput;
