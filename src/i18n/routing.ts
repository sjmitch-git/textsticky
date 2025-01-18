import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'es', 'ar', 'zh-CN', 'hi'],
  defaultLocale: 'en',
  pathnames: {
    '/': {
      en: '/',
      fr: '/accueil',
      es: '/inicio',
      ar: '/الرئيسية',
      'zh-CN': '/首页',
      hi: '/मुख्य',
    },
    '/pathnames': {
      en: '/pathnames',
      fr: '/noms-de-chemin',
      es: '/rutas',
      ar: '/مسارات',
      'zh-CN': '/路径名',
      hi: '/पथनाम',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
