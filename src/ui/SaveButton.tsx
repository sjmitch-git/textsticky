"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/lib/fluid";
import { SaveButtonProps, FormState, SavedImageProps } from "@/lib/types";
import { FaBookmark } from "react-icons/fa";

interface ExtendedSaveButtonProps extends SaveButtonProps {
  formState: FormState;
}

const SaveButton = ({ imageData, blobId, formState }: ExtendedSaveButtonProps) => {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [, setSavedImages] = useState<SavedImageProps[]>([]);

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(imagesFromStorage);

    const savedImage = imagesFromStorage.find((img: SavedImageProps) => img.blobId === blobId);
    if (savedImage) setSaved(true);
  }, [blobId]);

  const handleSave = () => {
    try {
      const newImageEntry = {
        url: imageData,
        blobId: blobId,
        created: new Date().toISOString(),
        state: formState,
      };

      setSavedImages((prevImages) => {
        const updatedImages = [...prevImages, newImageEntry as SavedImageProps];
        localStorage.setItem("savedImages", JSON.stringify(updatedImages));
        return updatedImages;
      });

      setSaved(true);
      router.push("/saved");
    } catch (error) {
      console.error("Failed to save the image:", error);
      setSaved(false);
    }
  };

  return (
    <Button
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="md"
      onClick={handleSave}
      disabled={saved}
    >
      <FaBookmark />
      <span>{saved ? "Saved!" : "Save"}</span>
    </Button>
  );
};

export default SaveButton;
