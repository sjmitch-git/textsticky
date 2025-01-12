"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SavedImageProps } from "@/lib/types";
import DeleteButton from "@/ui/DeleteButton";
import { Pagination, Loading, Alert } from "@/lib/fluid";

const SavedList = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("1");
  const [range, setRange] = useState(1);
  const [savedImages, setSavedImages] = useState<SavedImageProps[]>([]);
  const [paginatedImages, setPaginatedImages] = useState<SavedImageProps[]>([]);

  useEffect(() => {
    const updateRange = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRange(1);
      } else if (width < 1024) {
        setRange(6);
      } else {
        setRange(8);
      }
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(storedImages.reverse());
    setLoading(false);
  }, []);

  useEffect(() => {
    const start = (parseInt(page) - 1) * range;
    const end = start + range;
    setPaginatedImages(savedImages.slice(start, end));
  }, [page, savedImages, range]);

  const handleDelete = async (blobId: string) => {
    try {
      const imageIndex = savedImages.findIndex((image) => image.blobId === blobId);

      if (imageIndex === -1) {
        console.error("Image not found for the provided blobId");
        return;
      }

      const imageToDelete = savedImages[imageIndex];

      const response = await fetch(`/api/delete/${imageToDelete.blobId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Failed to delete image:", error.error);
        return;
      }
      const updatedImages = [...savedImages];
      updatedImages.splice(imageIndex, 1);
      const totalPages = Math.ceil(updatedImages.length / range);
      if (Number(page) > totalPages) {
        setPage((prevPage) => String(Math.max(Number(prevPage) - 1, 1)));
      }
      setSavedImages(updatedImages);
      localStorage.setItem("savedImages", JSON.stringify(updatedImages));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleClick = (blobId: string) => {
    const clickedImage = savedImages.find((img: SavedImageProps) => img.blobId === blobId);
    if (clickedImage) {
      const { state } = clickedImage;

      const { dimensions, ...stateWithoutDimensions } = state;

      const queryParams = {
        id: blobId,
        ...stateWithoutDimensions,
      };

      const queryString = new URLSearchParams(
        Object.entries(queryParams).map(([key, value]) => [key, String(value)])
      ).toString();

      router.push(`/share?${queryString}`);
    }
  };

  return (
    <div>
      {savedImages.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {paginatedImages.map((image, index) => (
              <li key={index} className="">
                <figure className="relative w-full aspect-[4/3] overflow-hidden border border-gray-200 rounded-lg bg-gray-400">
                  <img
                    src={image.url}
                    alt={`Saved image ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => handleClick(image.blobId)}
                    title="Click to share this image"
                  />
                  <figcaption className="absolute w-full bottom-0 flex p-1 justify-end">
                    <DeleteButton onClick={handleDelete} id={image.blobId} />
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <Pagination
            layout="horizontal"
            size="md"
            btnBackground="info"
            btnColor="dark"
            results={savedImages.length}
            range={range}
            feedback={false}
            feedbackLabel="Page:"
            page={page}
            onChange={(newpage) => setPage(newpage)}
          />
        </>
      ) : loading ? (
        <div className={`flex justify-center w-full`}>
          <Loading caption="Loading Images" loadingColor="warning" layout="col" />
        </div>
      ) : (
        <div className={`flex justify-center w-full`}>
          <Alert status="info" message="You have no saved images" className="w-full max-w-xl" />
        </div>
      )}
    </div>
  );
};

export default SavedList;
