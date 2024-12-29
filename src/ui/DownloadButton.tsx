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
    <button className="bg-primary text-white" onClick={handleDownload}>
      Download Button
    </button>
  );
}
