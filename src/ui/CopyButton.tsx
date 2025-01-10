"use client";

import React, { useState } from "react";

import { Button, Toast } from "@/lib/fluid";
import { FaCopy } from "react-icons/fa";
import { CopyButtonProps } from "@/lib/types";

const CopyButton = ({ imageData }: CopyButtonProps) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      const response = await fetch(imageData, { mode: "cors" });
      if (!response.ok) throw new Error("Failed to fetch image");

      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);

      setCopySuccess("Image copied to clipboard!");
      setOpen(true);
    } catch (error) {
      console.error("Error copying image:", error);
      setCopySuccess("Failed to copy image.");
      setOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleCopy}
        btnBackground="primary"
        btnColor="light"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="md"
        title="Copy Image"
      >
        <FaCopy />
        <span className="hidden md:inline-block">Copy Image</span>
      </Button>
      <Toast
        open={open}
        body={copySuccess}
        onClose={() => setOpen(false)}
        toastBackground="info"
        autohide={true}
        autohideDuration={3000}
        horizontal="center"
        vertical="middle"
      />
    </>
  );
};

export default CopyButton;
