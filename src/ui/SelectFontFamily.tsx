import React, { useState, useEffect } from "react";

import { fonts } from "@/lib/data/fonts";
import { Label, Select, Loading } from "@/lib/fluid";
import { SelectFontFamilyProps } from "@/lib/types";

const SelectFontFamily = ({ onChange, font }: SelectFontFamilyProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(fonts);
  }, []);

  if (options.length === 0)
    return (
      <div className="flex justify-center">
        <Loading loadingColor="info" />
      </div>
    );

  return (
    <Label label="Font Family:" size="md" layout="row">
      <Select
        onChange={onChange}
        defaultValue={font}
        name="fontfamily"
        dropdownSize="md"
        className="w-full border-neutral-300 focus:border-info"
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
