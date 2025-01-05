"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { useFormContext } from "@/lib/contexts/FormContext";
import DownloadButton from "@/ui/DownloadButton";
import SaveButton from "@/ui/SaveButton";
import EditButton from "@/ui/EditButton";
import { Loading, Button } from "@/lib/fluid";

const ShareContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const {
    aspect,
    backgroundColor,
    text,
    foregroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeColor,
    strokeWidth,
  } = useFormContext();
  const formState = {
    aspect,
    backgroundColor,
    text,
    foregroundColor,
    dimensions,
    fontSize,
    fontFamily,
    strokeColor,
    strokeWidth,
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

  const handleEdit = () => {
    router.push("/");
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!error && (
        <div className="flex flex-col items-center gap-4">
          <figure
            className={`bg-neutral relative w-full aspect-[${dimensions.width}/${dimensions.height}]`}
          >
            {loading && (
              <div
                className={`flex justify-center absolute top-0 left-0 w-full aspect-[${dimensions.width}/${dimensions.height}]`}
              >
                <Loading caption="Loading" loadingColor="warning" layout="col" />
              </div>
            )}
            {imageData && <img src={imageData} alt="Shared Image" />}
          </figure>
          {imageData && (
            <div className="flex gap-4 sticky bottom-4">
              <EditButton />
              <DownloadButton imageData={imageData} />
              <SaveButton imageData={imageData} blobId={id} formState={formState} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShareContent;
