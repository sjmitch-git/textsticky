'use client'

import React from "react";
import { useTranslations } from 'next-intl';
import { useFormContext } from "@/lib/contexts/FormContext";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { Button } from "@/lib/fluid";

export default function AlignButtons() {
  const { align, setAlign } = useFormContext();
  const t = useTranslations('buttons');

  const handleAlignmentChange = (alignment: "left" | "center" | "right") => {
    setAlign(alignment);
  };

  return (
    <div className="flex space-x-2">
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "left" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("left")}
        title={t('alignleftButton')}
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignLeft />
        <span className='sr-only'>{t('alignleftButton')}</span>
      </Button>
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "center" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("center")}
        title={t('aligncenterButton')}
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignCenter />
        <span className='sr-only'>{t('aligncenterButton')}</span>
      </Button>
      <Button
        className={`focus:border-info focus-visible:outline-info ${align === "right" ? "bg-info" : "bg-dark"}`}
        onClick={() => handleAlignmentChange("right")}
        title={t('alignrightButton')}
        outline
        outlineColor="light"
        hoverScale
        layout="rounded"
        size="sm"
      >
        <FaAlignRight />
        <span className='sr-only'>{t('alignrightButton')}</span>
      </Button>
    </div>
  );
}
