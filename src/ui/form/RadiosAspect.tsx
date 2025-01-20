import React from "react";
import { useTranslations } from 'next-intl';
import { useFormContext } from "@/lib/contexts/FormContext";
import { Label } from "@/lib/fluid";
import { Aspects } from "@/lib/types";

const RadiosAspect = () => {
  const { setDimensions, aspect, setAspect } = useFormContext();
  const [selectedAspect, setSelectedAspect] = React.useState<string>(aspect);
   const t = useTranslations('inputs');

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "square":
        return "aspect-square";
      case "banner":
        return "aspect-[3/1]";
      case "landscape":
        return "aspect-[2/1]";
    }
  };

  const handleAspectSelect = (aspect: string) => {
    setAspect(aspect);
    setDimensions(Aspects[aspect]);
    setSelectedAspect(aspect);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>, aspect: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleAspectSelect(aspect);
    }
  };

  const handleAspectsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const aspect = e.target.value;
    handleAspectSelect(aspect);
  };

  return (
    <Label label={t('aspects')} size="md" layout="row" className="items-center">
      <div className="flex justify-between">
        {Object.entries(Aspects).map(([key, dimensions]) => (
          <label
            key={key}
            aria-checked={selectedAspect === key}
            className={`relative flex flex-col items-center cursor-pointer focus-visible:outline-info`}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, key)}
          >
            <input
              type="radio"
              name="aspect"
              value={key}
              className="hidden"
              checked={selectedAspect === key}
              onChange={handleAspectsChange}
              readOnly
            />
            <div
              className={`flex items-center justify-center w-auto h-6 md:h-8 lg:h-10 border-2 ${
                selectedAspect === key
                  ? " border-dark text-dark"
                  : "border-neutral-300 text-neutral-300"
              } ${getAspectClass(key)}`}
              title={`${dimensions.width} x ${dimensions.height}`}
            >
              <svg
                className={`w-full h-auto ${getAspectClass(key)}`}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </label>
        ))}
      </div>
    </Label>
  );
};

export default RadiosAspect;
