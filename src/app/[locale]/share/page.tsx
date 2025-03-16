import React, { Suspense } from "react";
import type { Metadata } from "next";

import Hero from "@/ui/structure/Hero";
import ShareContent from "@/ui/share/ShareContent";
import { MetaData } from "@/lib/constants";
import { Aspects } from "@/lib/types";

import { useTranslations } from "next-intl";

type Props = {
  searchParams: Promise<{ [key: string]: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { id, aspect, text } = await searchParams;
  const imgUrl = `${process.env.BLOB_URL}uploads/image-${id}.png`;

  return {
    title: `${text} | ${MetaData.defaultSitename}`,
    description: "",
    openGraph: {
      title: text,
      description: "",
      images: [
        {
          url: imgUrl,
          width: Aspects[aspect || MetaData.defaultAspect].width,
          height: Aspects[aspect || MetaData.defaultAspect].height,
          alt: text,
        },
      ],
    },
  };
}

export default function Share() {
  const t = useTranslations();

  return (
    <article>
      <Hero title={t("titles.share")} description={t("descriptions.share")} />
      <Suspense>
        <ShareContent />
      </Suspense>
    </article>
  );
}
