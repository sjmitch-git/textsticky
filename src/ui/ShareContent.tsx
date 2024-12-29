"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useFormContext } from "@/lib/contexts/FormContext";
import DownloadButton from "@/ui/DownloadButton";
import SaveButton from "@/ui/SaveButton";

const ShareContent = () => {
  const searchParams = useSearchParams();
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const { aspect, backgroundColor, text, foregroundColor, dimensions, fontSize, fontFamily } =
    useFormContext();
  const formState = {
    aspect,
    backgroundColor,
    text,
    foregroundColor,
    dimensions,
    fontSize,
    fontFamily,
  };

  useEffect(() => {
    const blobId = searchParams.get("id");
    if (blobId) {
      const fetchData = async () => {
        setId(blobId);
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/blob/${encodeURIComponent(blobId)}`);
          if (response.ok) {
            const data = await response.json();
            setImageData(data.imgUrl);
          } else {
            throw new Error("Failed to fetch blob data.");
          }
        } catch (error) {
          console.log(error);
          setError("Unknown error occurred.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [searchParams]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {imageData && (
        <div className="flex flex-col items-center gap-4">
          <img src={imageData} alt="Shared Image" />
          <div className="flex gap-4">
            <Link href="/create">Back</Link>
            <DownloadButton imageData={imageData} />
            <SaveButton imageData={imageData} blobId={id} formState={formState} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShareContent;
