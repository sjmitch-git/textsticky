"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { UploadButtonProps, SavedImageProps } from "@/lib/types";
import { Button, Spinner } from "@/lib/fluid";
import { FaUpload } from "react-icons/fa";

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

      router.push(`/share?id=${encodeURIComponent(blobId)}`);
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
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="md"
      disabled={uploading}
      className="focus:border-info focus-visible:outline-info"
    >
      {uploading ? <Spinner width={16} /> : <FaUpload />}
      <span>Upload & Save</span>
    </Button>
  );
}
