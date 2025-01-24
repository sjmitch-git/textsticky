import type { Metadata } from "next";
import Hero from "@/ui/structure/Hero";
import SavedList from "@/ui/saved/SavedList";
import { MetaData } from "@/lib/constants";

import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: `Saved | ${MetaData.defaultSitename}`,
  description: "Saved items",
};

export default function Saved() {
  const t = useTranslations();
  return (
    <article>
      <Hero title={t("titles.saved")} description={t("descriptions.saved")} />
      <SavedList />
    </article>
  );
}
