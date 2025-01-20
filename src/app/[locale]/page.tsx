import { useTranslations } from "next-intl";

import InputForm from "@/ui/form/InputForm";
import PreviewCanvas from "@/ui/canvas/PreviewCanvas";
import Hero from "@/ui/structure/Hero";

export default function Home() {
  const t = useTranslations();

  return (
    <article>
      <Hero title={t("titles.home")} description={t("descriptions.home")} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputForm />
        <PreviewCanvas />
      </div>
    </article>
  );
}
