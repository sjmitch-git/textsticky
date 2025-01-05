"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormContext, defaultState } from "@/lib/contexts/FormContext";
import { SavedImageProps } from "@/lib/types";
import DeleteButton from "@/ui/DeleteButton";

const SavedList = () => {
  const router = useRouter();
  const [savedImages, setSavedImages] = useState<SavedImageProps[]>([]);
  const {
    setText,
    setForegroundColor,
    setBackgroundColor,
    setDimensions,
    setFontSize,
    setFontFamily,
    setAspect,
    setStrokeColor,
    setStrokeWidth,
  } = useFormContext();

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(storedImages.reverse());
  }, []);

  const handleDelete = async (index: number) => {
    try {
      const updatedImages = [...savedImages];
      const imageToDelete = updatedImages[index];
      const imageId = imageToDelete?.blobId;

      if (!imageId) {
        console.error("Image ID is missing");
        return;
      }

      const response = await fetch(`/api/delete/${imageId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Failed to delete image:", error.error);
        return;
      }

      updatedImages.splice(index, 1);
      setSavedImages(updatedImages);
      localStorage.setItem("savedImages", JSON.stringify(updatedImages));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleClick = (blobId: string) => {
    const clickedImage = savedImages.find((img: SavedImageProps) => img.blobId === blobId);
    if (clickedImage) {
      const { state } = clickedImage;
      setText(state.text);
      setForegroundColor(state.foregroundColor);
      setBackgroundColor(state.backgroundColor);
      setDimensions(state.dimensions);
      setFontSize(state.fontSize);
      setFontFamily(state.fontFamily);
      setAspect(state.aspect);
      setStrokeColor(state.strokeColor || defaultState.strokeColor);
      setStrokeWidth(state.strokeWidth || defaultState.strokeWidth);
      router.push(`/share?id=${encodeURIComponent(blobId)}`);
    }
  };

  return (
    <div>
      {savedImages.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {savedImages.map((image, index) => (
            <li key={index} className="">
              <figure className="relative w-full aspect-[4/3] overflow-hidden border border-gray-200 rounded-lg bg-gray-400">
                <img
                  src={image.url}
                  alt={`Saved image ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleClick(image.blobId)}
                  title="Click to share this image"
                />
                <figcaption className="absolute w-full bottom-0 flex p-1 justify-end">
                  <DeleteButton onClick={handleDelete} index={index} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <p>No images saved yet.</p>
      )}
    </div>
  );
};

export default SavedList;
