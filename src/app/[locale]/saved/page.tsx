import { Heading } from "@/lib/fluid";
import SavedList from "@/ui/SavedList";
import { Labels } from "@/lib/constants";

import { useTranslations } from 'next-intl';

export default function Saved() {
  const t = useTranslations();

  return (
    <article>
      <div className="flex gap-8 flex-row items-center max-md:hidden">
        <Heading className="opacity-50">{t('titles.saved')}</Heading>
        <p className="mb-4 max-w-lg">{t('descriptions.saved')}</p>
      </div>
      <SavedList />
    </article>
  );
}
