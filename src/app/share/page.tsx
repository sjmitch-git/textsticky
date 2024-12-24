"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
//import type { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Share Image",
  description: "Share your custom image",
}; */

export function ShareContent() {
  const searchParams = useSearchParams();
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const imageParam = searchParams.get("image");
    if (imageParam) {
      setImage(imageParam);
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Share</h1>
      {image ? (
        <>
          <img src={image} alt="Shared Image" />
        </>
      ) : (
        <p>No image to display</p>
      )}
    </div>
  );
}

export default function Share() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShareContent />
    </Suspense>
  );
}
