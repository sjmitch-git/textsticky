import React, { useState, useEffect } from "react";

import { fonts } from "@/lib/data/fonts";
import { Label, Select } from "@/lib/fluid";
import { SelectFontFamilyProps } from "@/lib/types";

const SelectFontFamily = ({ onChange, font }: SelectFontFamilyProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(fonts);
  }, []);

  return (
    <Label label="Font Family:" size="md" layout="row">
      <Select
        onChange={onChange}
        value={font}
        name="fontfamily"
        dropdownSize="md"
        className="w-full border-neutral-300"
      >
        {options.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </Select>
    </Label>
  );
};

export default SelectFontFamily;
