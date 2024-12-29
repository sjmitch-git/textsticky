import React, { useState } from "react";

import { SaveButtonProps, FormState } from "@/lib/types";

interface ExtendedSaveButtonProps extends SaveButtonProps {
  formState: FormState;
}

const SaveButton = ({ imageData, blobId, formState }: ExtendedSaveButtonProps) => {
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    try {
      const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");

      const newImageEntry = {
        url: imageData,
        blobId: blobId,
        created: new Date().toISOString(),
        state: formState,
      };

      savedImages.push(newImageEntry);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));

      setSaved(true);
    } catch (error) {
      console.error("Failed to save the image:", error);
      setSaved(false);
    }
  };

  return (
    <button className="bg-primary text-white" onClick={handleSave}>
      {saved ? "Saved!" : "Save"}
    </button>
  );
};

export default SaveButton;
