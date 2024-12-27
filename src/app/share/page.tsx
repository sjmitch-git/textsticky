"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef, Suspense } from "react";

const ShareContent = () => {
  const searchParams = useSearchParams();
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    const blobId = searchParams.get("id");
    if (blobId && !hasFetched.current) {
      hasFetched.current = true;
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/blob/${encodeURIComponent(blobId)}`);
          if (response.ok) {
            const data = await response.json();
            setImageData(data.base64Image);
          } else {
            throw new Error("Failed to fetch blob data.");
          }
        } catch (error) {
          console.error(error);
          setError("Unknown error occurred.");
        } finally {
          setLoading(false);
          hasFetched.current = false;
        }
      };
      fetchData();
    }

    return () => {
      hasFetched.current = false;
    };
  }, [searchParams]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Shared Image" />}
    </>
  );
};

export default function Share() {
  const router = useRouter();
  return (
    <div>
      <h1>Share</h1>
      <Suspense>
        <ShareContent />
      </Suspense>
      <button
        onClick={() => router.push("/create")}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back to Create
      </button>
    </div>
  );
}
