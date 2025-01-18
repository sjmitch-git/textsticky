import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Heading } from "@/lib/fluid";
import ShareContent from "@/ui/ShareContent";
import { MetaData } from "@/lib/constants";
import { Aspects } from "@/lib/types";
import { useTranslations } from 'next-intl';

type Props = {
  searchParams: Promise<{ [key: string]: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { id, aspect, text } = await searchParams;

  const imgUrl = `${process.env.BLOB_URL}uploads/image-${id}.png`;

  return {
    title: text,
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
      <div className="flex gap-8 flex-row items-center max-md:hidden">
        <Heading className="opacity-50">{t('titles.share')}</Heading>
        <p className="mb-4 max-w-lg">{t('descriptions.share')}</p>
      </div>
      <Suspense>
        <ShareContent />
      </Suspense>
    </article>
  );
}
