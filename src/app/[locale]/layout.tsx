import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import "@/styles/index.css";
import Header from "@/ui/structure/Header";
import Footer from "@/ui/structure/Footer";
import { generateMetadata as generateGlobalMetadata, jsonLd } from "@/lib/metadata";
import { FormProvider } from "@/lib/contexts/FormContext";
import { GoogleAnalytics } from "@next/third-parties/google";

interface MetaProps {
  params: Promise<{ [key: string]: string }>;
}

interface Props extends MetaProps {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: MetaProps) {
  const { locale } = await params;
  const globalMetadata = await generateGlobalMetadata(locale);
  return globalMetadata;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={direction}>
      <GoogleAnalytics gaId={process.env.GTAG || ""} />
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <FormProvider locale={locale}>
            <main className="flex-grow container mx-auto max-w-4xl md:py-8 md:px-4 lg:px-0">
              {children}
            </main>
          </FormProvider>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
