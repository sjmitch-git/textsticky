"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { UploadButtonProps, SavedImageProps } from "@/lib/types";
import { Button, Spinner } from "@/lib/fluid";
import { FaUpload } from "react-icons/fa";
import { Labels } from "@/lib/constants";

export default function UploadButton({ canvasRef, formState }: UploadButtonProps) {
  const [uploading, setUploading] = useState(false);
  const [, setSavedImages] = useState<SavedImageProps[]>([]);
  const router = useRouter();
  const hasUploaded = useRef(false);

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(imagesFromStorage);
  }, []);

  const handleSave = (imageData: string, blobId: string) => {
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

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { dimensions, ...stateWithoutDimensions } = formState;

      const queryParams = {
        id: blobId,
        ...stateWithoutDimensions,
      };

      const queryString = new URLSearchParams(
        Object.entries(queryParams).map(([key, value]) => [key, String(value)])
      ).toString();

      router.push(`/share?${queryString}`);
    } catch (error) {
      console.error("Failed to save the image:", error);
    }
  };

  const handleCreate = async () => {
    if (hasUploaded.current) return;
    hasUploaded.current = true;
    setUploading(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const base64Image = canvas.toDataURL("image/png", 1);

      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Image }),
      });

      const data = await response.json();

      const blobId = data.url.split("image-")[1].split(".png")[0];

      handleSave(data.url, blobId);

      hasUploaded.current = false;
    }
  };

  return (
    <Button
      onClick={handleCreate}
      btnBackground="dark"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="lg"
      disabled={uploading}
      className="focus:border-info focus-visible:outline-info"
    >
      {uploading ? <Spinner width={24} /> : <FaUpload />}
      <span>{Labels.UploadButton}</span>
    </Button>
  );
}
