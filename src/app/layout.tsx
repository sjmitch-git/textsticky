import type { Metadata } from "next";
import { FormProvider } from "@/lib/contexts/FormContext";
import "@/styles/index.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

export const metadata: Metadata = {
  title: "TextSticky - Create Custom Text Sticky Notes",
  description:
    "Design and share personalized sticky notes with custom text, colors, and dimensions.",
  keywords: "Text Sticky, Custom Notes, Placeholder Generator, Social Media Images",
  authors: [{ name: "Stephen Mitchell" }],
  openGraph: {
    title: "TextSticky - Create Custom Text Sticky Notes",
    description:
      "Design and share personalized sticky notes with custom text, colors, and dimensions.",
    /* images: [
      {
        url: "/textsticky-preview.png", // Replace with an actual image path
        width: 1200,
        height: 630,
        alt: "Preview of a custom sticky note",
      },
    ], */
    siteName: "TextSticky",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextSticky - Create Custom Text Sticky Notes",
    description:
      "Design and share personalized sticky notes with custom text, colors, and dimensions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <FormProvider>
          <main className="flex-grow container bg-neutral-200 mx-auto">{children}</main>
        </FormProvider>
        <Footer />
      </body>
    </html>
  );
}
