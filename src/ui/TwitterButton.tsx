"use client";

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@/lib/fluid";

interface TwitterShareButtonProps {
  text: string;
}

const TwitterShareButton = ({ text }: TwitterShareButtonProps) => {
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
      title="Share on Twitter"
      className="focus:border-info focus-visible:outline-info bg-[#1DA1F2]"
    >
      <FaTwitter />
      <span className="sr-only">Share on Twitter</span>
    </Button>
  );
};

export default TwitterShareButton;
