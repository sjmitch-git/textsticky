"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Aspects } from "@/lib/types";
import { useFormContext, defaultState } from "@/lib/contexts/FormContext";
import ShareActions from "@/ui/share/ShareActions";
import { Loading, Alert } from "@/lib/fluid";

const ShareContent = () => {
  const searchParams = useSearchParams();
  const [imageData, setImageData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {
    text,
    dimensions,
    setText,
    setForegroundColor,
    setBackgroundColor,
    setDimensions,
    setFontSize,
    setFontFamily,
    setAspect,
    setStrokeColor,
    setStrokeWidth,
    setAlign,
  } = useFormContext();

  const formState = {
    text,
    dimensions,
  };

  useEffect(() => {
    const id = searchParams.get("id");
    const alignParam = searchParams.get("align");
    const entries = Array.from(searchParams.entries());

    if (entries.length) {
      entries.slice(1).map(([key, value]) => {
        const decodedValue = decodeURIComponent(value);

        switch (key) {
          case "text":
            setText(decodedValue);
            break;
          case "foregroundColor":
            setForegroundColor(decodedValue);
            break;
          case "backgroundColor":
            setBackgroundColor(decodedValue);
            break;
          case "fontSize":
            setFontSize(Number(decodedValue));
            break;
          case "fontFamily":
            setFontFamily(decodedValue);
            break;
          case "aspect":
            setAspect(decodedValue);
            setDimensions(Aspects[decodedValue]);
            break;
          case "strokeColor":
            setStrokeColor(decodedValue);
            break;
          case "strokeWidth":
            setStrokeWidth(Number(decodedValue));
            break;
        }
      });

      if (alignParam) setAlign(alignParam as CanvasTextAlign);
      else setAlign(defaultState.align);
    }

    if (id) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/blob/${encodeURIComponent(id)}`);
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
  }, [
    searchParams,
    setAspect,
    setBackgroundColor,
    setDimensions,
    setFontFamily,
    setFontSize,
    setForegroundColor,
    setStrokeColor,
    setStrokeWidth,
    setText,
    setAlign,
  ]);

  const t = useTranslations();

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
                <Loading
                  caption={t("messages.loadingShare")}
                  loadingColor="info"
                  layout="col"
                  size="lg"
                />
              </div>
            )}
            {imageData && <img id="image" src={imageData} alt="Shared Image" />}
          </figure>
          {imageData && <ShareActions imageData={imageData} subject={formState.text} />}
        </div>
      )}
    </>
  );
};

export default ShareContent;
