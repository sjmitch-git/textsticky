"use client";

import { useEffect, useState } from "react";
import { Button } from "@/lib/fluid";
import { FaEnvelope } from "react-icons/fa";
import { MailImageButtonProps } from "@/lib/types";

const MailtoButton = ({ imageUrl, subject }: MailImageButtonProps) => {
  const [mailSubject, setSubject] = useState("");

  useEffect(() => {
    setSubject(subject);
  }, [subject]);

  const handleMailClick = async () => {
    const encodedSubject = encodeURIComponent(mailSubject.replace(/(\r\n|\n|\r)/g, " "));
    const response = await fetch(imageUrl, { mode: "cors" });
    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);

    const htmlBody = encodeURIComponent(
      `Paste your image here. Ctrl + V (Windows) or Command (⌘) + V (macOS)`
    );
    const mailtoLink = `mailto:?subject=${encodedSubject}&body=${htmlBody}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <Button
        onClick={handleMailClick}
        btnBackground="primary"
        btnColor="light"
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="md"
        title="Mail Image"
      >
        <FaEnvelope />
        <span className="hidden md:inline-block">Mail Image</span>
      </Button>
    </>
  );
};

export default MailtoButton;
