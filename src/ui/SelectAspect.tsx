import React, { useState, useEffect } from "react";

import { Label, Select } from "@/lib/fluid";
import { Aspects, SelectAspectProps } from "@/lib/types";

const SelectAspect = ({ onChange, aspect }: SelectAspectProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(Object.keys(Aspects));
  }, [Aspects]);

  return (
    <Label label="Aspect:" size="md" layout="row">
      <Select
        onChange={onChange}
        defaultValue={aspect}
        name="aspects"
        dropdownSize="md"
        className="w-full border-neutral-300"
      >
        {options.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
    </Label>
  );
};

export default SelectAspect;
