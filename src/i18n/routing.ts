import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es", "ar", "zh-CN", "hi", "de", "pt", "jp", "ru"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      fr: "/noms-de-chemin",
      es: "/rutas",
      ar: "/مسارات",
      "zh-CN": "/路径名",
      hi: "/पथनाम",
      de: "/pfadnamen",
      pt: "/nomes-de-caminho",
      jp: "/パス名",
      ru: "/имена-путей",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
