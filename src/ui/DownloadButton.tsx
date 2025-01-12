"use client";

import React, { useState } from "react";
import { Button, Toast } from "@/lib/fluid";
import { FaDownload } from "react-icons/fa";
import { DownloadButtonProps } from "@/lib/types";
import { Labels } from "@/lib/constants";

export default function DownloadButton({ imageData }: DownloadButtonProps) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [toastBackground, setToastBackground] = useState<"success" | "danger">("success");

  const handleDownload = async () => {
    try {
      const response = await fetch(imageData, { mode: "cors" });
      if (!response.ok) {
        setMessage(Labels.messages.downloadError);
        setToastBackground("danger");
        setOpen(true);
      }

      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image.png";
      link.click();
      setMessage(Labels.messages.downloadSuccess);
      setToastBackground("success");
      setOpen(true);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      setMessage(Labels.messages.downloadError);
      setToastBackground("danger");
      setOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleDownload}
        btnBackground="dark"
        btnColor="light"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="lg"
        title={Labels.DownloadButton}
        className="focus:border-info focus-visible:outline-info"
      >
        <FaDownload />
        <span className="hidden md:inline-block">{Labels.DownloadButton}</span>
      </Button>
      <Toast
        open={open}
        body={message}
        onClose={() => setOpen(false)}
        toastBackground={toastBackground}
        autohide={true}
        autohideDuration={3000}
        horizontal="center"
        vertical="middle"
      />
    </>
  );
}
