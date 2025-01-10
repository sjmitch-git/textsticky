import { Suspense } from "react";
import type { Metadata } from "next";
import { Heading } from "@/lib/fluid";
import ShareContent from "@/ui/ShareContent";
import { MetaData, Labels } from "@/lib/constants";

type Props = {
  searchParams: Promise<{ [key: string]: string | number | boolean }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { id } = await searchParams;
  const imgUrl = `${process.env.BLOB_URL}uploads/image-${id}.png`;

  return {
    openGraph: {
      images: [
        {
          url: imgUrl,
          width: MetaData.defaultImageWidth,
          height: MetaData.defaultImageHeight,
          alt: MetaData.defaultImageAlt,
        },
      ],
    },
  };
}

export default function Share() {
  return (
    <article>
      <div className="flex gap-8 flex-col md:flex-row items-center">
        <Heading className="opacity-50">{Labels.titles.share}</Heading>
        <p className="mb-4">{Labels.descriptions.share}</p>
      </div>
      <Suspense>
        <ShareContent />
      </Suspense>
    </article>
  );
}
