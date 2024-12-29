"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormContext } from "@/lib/contexts/FormContext";

import { SavedImageProps } from "@/lib/types";

export default function Saved() {
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
  } = useFormContext();

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(storedImages.reverse());
  }, []);

  const handleDelete = (index: number) => {
    const updatedImages = [...savedImages];
    updatedImages.splice(index, 1);
    setSavedImages(updatedImages);
    localStorage.setItem("savedImages", JSON.stringify(updatedImages));
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
      router.push(`/share?id=${encodeURIComponent(blobId)}`);
    }
  };

  return (
    <div>
      <h1>Saved Images</h1>
      {savedImages.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 border border-red-500">
          {savedImages.map((image, index) => (
            <li key={index} className="">
              <figure className="relative w-full aspect-[4/3] overflow-hidden border border-gray-200 rounded-lg">
                <img
                  src={image.url}
                  alt={`Saved image ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleClick(image.blobId)}
                />
                <figcaption className="absolute w-full bottom-0 text-right text-sm">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
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
}
