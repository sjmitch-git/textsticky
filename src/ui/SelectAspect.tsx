import React, { useState, useEffect } from "react";

import { Label, Select, Loading } from "@/lib/fluid";
import { Aspects, SelectAspectProps } from "@/lib/types";

const SelectAspect = ({ onChange, aspect }: SelectAspectProps) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(Object.keys(Aspects));
  }, []);

  if (options.length === 0)
    return (
      <div className="flex justify-center">
        <Loading loadingColor="info" />
      </div>
    );

  return (
    <Label label="Aspect:" size="md" layout="row">
      <Select
        onChange={onChange}
        defaultValue={aspect}
        name="aspects"
        dropdownSize="md"
        className="w-full border-neutral-300 focus:border-info"
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
