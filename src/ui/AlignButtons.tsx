import React from "react";
import { useFormContext } from "@/lib/contexts/FormContext";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { Button } from "@/lib/fluid";

export default function AlignButtons() {
  const { align, setAlign } = useFormContext();

  const handleAlignmentChange = (alignment: "left" | "center" | "right") => {
    setAlign(alignment);
  };

  return (
    <div className="flex space-x-2">
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "left" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("left")}
        title="Align Left"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignLeft />
      </Button>
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "center" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("center")}
        title="Align Center"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignCenter />
      </Button>
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "right" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("right")}
        title="Align Right"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignRight />
      </Button>
    </div>
  );
}
