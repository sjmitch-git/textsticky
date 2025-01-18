import { useTranslations } from 'next-intl';

import { Heading } from "@/lib/fluid";

import InputForm from "@/ui/InputForm";
import PreviewCanvas from "@/ui/PreviewCanvas";

export default function Home()  {
 const t = useTranslations();

  return (
    <article>
      <div className="flex gap-8 flex-row items-center max-md:hidden">
        <Heading className="opacity-50">{t('titles.home')}</Heading>
        <p className="mb-4 max-w-lg">{t('descriptions.home')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputForm />
        <PreviewCanvas />
      </div>
    </article>
  );
}
