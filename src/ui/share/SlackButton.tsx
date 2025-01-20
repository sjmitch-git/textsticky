"use client";

import React from "react";
import { FaSlack } from "react-icons/fa";
import { Button } from "@/lib/fluid";

interface SlackShareButtonProps {
  text: string;
}

const SlackShareButton = ({ text }: SlackShareButtonProps)  => {
  const handleShareClick = () => {
    const baseUrl = "https://slack.com/share";
    const shareUrl = new URL(baseUrl);

    shareUrl.searchParams.set("url", window.location.href);
    shareUrl.searchParams.set("text", text);

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
      title="Slack"
      className="focus:border-info focus-visible:outline-info bg-[#4A154B]"
    >
      <FaSlack  />
      <span className="sr-only">Share on Slack</span>
    </Button>
  );
};

export default SlackShareButton ;
