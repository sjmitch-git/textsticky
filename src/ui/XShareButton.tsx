"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/lib/fluid";

interface XShareButtonProps {
  text: string;
}

const XShareButton = ({ text }: XShareButtonProps ) => {
  const handleShareClick = () => {
    const baseUrl = "https://x.com/intent/tweet";
    const params = new URLSearchParams({
      text: encodeURIComponent(text.replace(/(\r\n|\n|\r)/g, " ")),
      url: window.location.href,
    });

    const shareUrl = `${baseUrl}?${params.toString()}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleShareClick}
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="circle"
      size="lg"
      title="Share on X"
      className="focus:border-info focus-visible:outline-info bg-[#000000]"
    >
      <FaXTwitter />
      <span className="sr-only">Share on X</span>
    </Button>
  );
};

export default XShareButton;
