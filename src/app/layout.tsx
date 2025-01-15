import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FormProvider } from "@/lib/contexts/FormContext";
import "@/styles/index.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { URLs, MetaData } from "@/lib/constants";

export const metadata: Metadata = {
  title: MetaData.defaultTitle,
  description: MetaData.defaultDescription,
  keywords: MetaData.defaultKeywords,
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [{ name: MetaData.defaultAuthor, url: MetaData.defaultAuthorUrl }],
  metadataBase: new URL(URLs.base),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: MetaData.defaultTitle,
    description: MetaData.defaultDescription,
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
    { rel: "apple-touch-icon", url: "icons/apple-icon-120x120.png" },
    { rel: "icon", url: "icons/android-icon-192x192.png" },
  ],
};

const jsonLd = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={MetaData.gaId} />
      <body className="flex flex-col min-h-screen">
        <Header />
        <FormProvider>
          <main className="flex-grow container mx-auto max-w-4xl py-8 px-4 lg:px-0">
            {children}
          </main>
        </FormProvider>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
