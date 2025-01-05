import Link from "next/link";
import { MetaData } from "@/lib/constants";

import { FaBookmark, FaEdit } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-neutral-200 p-4 lg:px-0 shadow-sm">
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <picture>
          <source srcSet="/logo-sm.webp" media="(orientation: portrait)" />
          <source srcSet="/logo-sm.png" media="(orientation: portrait)" />
          <source srcSet="/logo.webp" media="(orientation: landscape)" />
          <img src="/logo.png" alt={MetaData.defaultSitename} />
        </picture>
        <nav className="flex gap-4">
          <Link
            href="/"
            className="hover:underline bg-dark text-light rounded-md p-2 flex gap-2 items-center"
          >
            <FaEdit /> <span className="hidden md:inline-block">Create</span>
          </Link>
          <Link
            href="/saved"
            className="hover:underline bg-dark text-light rounded-md p-2 flex gap-2 items-center"
          >
            <FaBookmark /> <span className="hidden md:inline-block">Saved</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
