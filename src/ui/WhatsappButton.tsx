"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/lib/fluid";

interface WhatsAppShareButtonProps {
  text: string;
}

const WhatsAppShareButton  = ({ text }: WhatsAppShareButtonProps) => {
  const handleShareClick = () => {
    const baseUrl = "https://api.whatsapp.com/send";
    const shareUrl = new URL(baseUrl);

    shareUrl.searchParams.set("text", `${text}: ${window.location.href}`);

    window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
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
      title="Share on WhatsApp"
      className="focus:border-info focus-visible:outline-info bg-[#25D366]"
    >
      <FaWhatsapp />
      <span className="sr-only">Share on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppShareButton ;
