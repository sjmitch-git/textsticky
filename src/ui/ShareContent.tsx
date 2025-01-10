"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useFormContext } from "@/lib/contexts/FormContext";
import DownloadButton from "@/ui/DownloadButton";
import EditButton from "@/ui/EditButton";
import CopyButton from "@/ui/CopyButton";
import MailtoButton from "@/ui/MailtoButton";
import { Loading, Alert } from "@/lib/fluid";

const ShareContent = () => {
  const searchParams = useSearchParams();
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { text, dimensions } = useFormContext();

  const formState = {
    text,
    dimensions,
  };

  useEffect(() => {
    const blobId = searchParams.get("id");
    if (blobId) {
      const fetchData = async () => {
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
      {error && (
        <div className={`flex justify-center w-full`}>
          <Alert status="error" message={error} className="w-full max-w-xl" />
        </div>
      )}
      {!error && (
        <div className="flex flex-col items-center gap-4">
          <figure
            className={`bg-neutral relative w-full aspect-[${dimensions.width}/${dimensions.height}]`}
          >
            {loading && (
              <div
                className={`flex justify-center absolute top-0 left-0 w-full aspect-[${dimensions.width}/${dimensions.height}]`}
              >
                <Loading caption="Loading Image" loadingColor="info" layout="col" />
              </div>
            )}
            {imageData && <img id="image" src={imageData} alt="Shared Image" />}
          </figure>
          {imageData && (
            <div className="flex gap-4 sticky bottom-4">
              <EditButton />
              <DownloadButton imageData={imageData} />
              <CopyButton imageData={imageData} />
              <MailtoButton imageUrl={imageData} subject={formState.text} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShareContent;
