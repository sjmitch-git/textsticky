import React, { useState, useEffect } from "react";

import { fonts } from "@/lib/data/fonts";
import { Label, Select, Loading } from "@/lib/fluid";
import { SelectFontFamilyProps } from "@/lib/types";

const SelectFontFamily = ({ onChange, font, label }: SelectFontFamilyProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(fonts);
  }, []);

  return (
    <Label label={label} size="md" layout="row" suppressHydrationWarning>
      {options.length !== 0 ? (
        <Select
          onChange={onChange}
          defaultValue={font}
          name="fontfamily"
          dropdownSize="md"
          className="w-full border-neutral-300 focus:border-info"
          style={{ fontFamily: font }}
        >
          {options.length !== 0 && {options.map((font) => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font}
            </option>
          ))}}
        </Select>
      ) : (
        <div className="flex justify-start items-center border-neutral-300 p-2 w-full">
          <Loading loadingColor="info" size="sm" />
        </div>
      )}
    </Label>
  );
};

export default SelectFontFamily;
