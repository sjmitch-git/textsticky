import Hero from "@/ui/structure/Hero";
import SavedList from "@/ui/saved/SavedList";

import { useTranslations } from "next-intl";

export default function Saved() {
  const t = useTranslations();

  return (
    <article>
      <Hero title={t("titles.saved")} description={t("descriptions.saved")} />
      <SavedList />
    </article>
  );
}
