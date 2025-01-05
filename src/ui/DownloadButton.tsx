import { Button } from "@/lib/fluid";
import { FaDownload } from "react-icons/fa";
import { DownloadButtonProps } from "@/lib/types";

export default function DownloadButton({ imageData }: DownloadButtonProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageData, { mode: "cors" });
      if (!response.ok) throw new Error("Failed to fetch image");

      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image.png";
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      throw new Error("Failed to download the image.");
    }
  };

  return (
    <Button
      onClick={handleDownload}
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="md"
    >
      <FaDownload />
      <span>Download Image</span>
    </Button>
  );
}
