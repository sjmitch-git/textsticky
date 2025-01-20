"use client";

import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import { Button, Toast } from "@/lib/fluid";
import { FaCopy } from "react-icons/fa";
import { CopyButtonProps } from "@/lib/types";

const CopyButton = ({ imageData }: CopyButtonProps) => {
  const [copyMessage, setCopyMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [toastBackground, setToastBackground] = useState<"success" | "danger">("success");
  const t = useTranslations();

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

      setCopyMessage(t('messages.copySuccess'));
      setToastBackground("success");
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setCopyMessage(t('messages.copyError'));
      setToastBackground("danger");
      setOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleCopy}
        btnBackground="dark"
        btnColor="light"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="lg"
        title={t('buttons.CopyButton')}
        className="focus:border-info focus-visible:outline-info"
      >
        <FaCopy />
        <span className="hidden md:inline-block">{t('buttons.CopyButton')}</span>
      </Button>
      <Toast
        open={open}
        body={copyMessage}
        onClose={() => setOpen(false)}
        toastBackground={toastBackground}
        autohide={true}
        autohideDuration={3000}
        horizontal="center"
        vertical="middle"
      />
    </>
  );
};

export default CopyButton;
