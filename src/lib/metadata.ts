import type { Metadata } from 'next';
import { MetaData, URLs } from '@/lib/constants';

export async function generateMetadata(locale: string): Promise<Metadata> {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    title: `${MetaData.defaultSitename} | ${messages.titles.home}`,
    description: messages.descriptions.home,
    keywords: MetaData.defaultKeywords,
    generator: 'Next.js',
    manifest: '/manifest.json',
    authors: [{ name: MetaData.defaultAuthor, url: MetaData.defaultAuthorUrl }],
    metadataBase: new URL(URLs.base),
    alternates: {
      canonical: new URL(URLs.base),
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      title: messages.titles.home,
      description: messages.descriptions.home,
      images: [
        {
          url: MetaData.defaultImage,
          width: MetaData.defaultImageWidth,
          height: MetaData.defaultImageHeight,
          alt: MetaData.defaultImageAlt,
        },
      ],
      siteName: MetaData.defaultSitename,
    },
    twitter: {
      card: MetaData.defaultTwitterCard,
    },
    icons: [
      { rel: 'apple-touch-icon', url: 'icons/apple-icon-120x120.png' },
      { rel: 'icon', url: 'icons/android-icon-192x192.png' },
    ],
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: new URL(URLs.base),
  name: MetaData.defaultSitename,
  description: MetaData.defaultDescription,
  author: {
    "@type": "Person",
    name: MetaData.defaultAuthor,
    url: MetaData.defaultAuthorUrl,
  },
};
