import Nav from "@/ui/Nav";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");

  return (
    <header className="bg-neutral-200 p-4 lg:px-0 shadow-sm">
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <picture>
          <source
            srcSet="/logo-mobile.png"
            media="(max-width: 480px)"
            type="image/png"
            width="200"
            height="32"
          />
          <source
            srcSet="/logo-tablet.png"
            media="(min-width: 481px) and (max-width: 1024px)"
            type="image/png"
            width="300"
            height="48"
          />
          <source
            srcSet="/logo-desktop.png"
            media="(min-width: 1025px)"
            type="image/png"
            width="400"
            height="64"
          />
          <img
            src="/logo-desktop.png"
            alt="Sticky Blob Logo - Create Custom Sticky Notes"
            width="400"
            height="64"
          />
        </picture>

        <Nav create={t('create')} saved={t('saved')} />
      </div>
    </header>
  );
}
