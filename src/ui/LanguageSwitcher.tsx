"use client";

import {Link} from '@/i18n/routing';

const locales = [
  { code: "en", name: "English", flag: "/flags/en.png", width: 40 },
  { code: "fr", name: "Français", flag: "/flags/fr.png", width: 36  },
  { code: "es", name: "Español", flag: "/flags/es.png", width: 36  },
  // { code: "ar", name: "العربية", flag: "/flags/sa.png", width: 36  },
  { code: "zh-CN", name: "中文", flag: "/flags/cn.png", width: 36  },
  { code: "hi", name: "हिंदी", flag: "/flags/in.png", width: 36  },
];

export default function LanguageSwitcher() {

  return (
    <nav className="flex gap-2 justify-center">
      {locales.map(({ code, name, flag, width }) => (
        <Link
          key={code}
          href='/'
          locale={code}
          className="group flex items-center gap-1 p-1 hover:opacity-75 focus-visible:outline focus-visible:outline-accent"
          title={name}
        >
          <img
            src={flag}
            alt={name}
            height={24}
            width={width}
          />
          <span className="sr-only">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
