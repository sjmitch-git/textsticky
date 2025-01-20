'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaBookmark, FaEdit } from "react-icons/fa";

interface NavProps {
  create: string,
  saved: string
}

export default function Nav({create, saved}: NavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
          <Link
            href="/"
            title={create}
            tabIndex={pathname === "/" ? -1 : 0}
            className={`rounded-md text-light p-2 flex gap-2 items-center ${pathname === "/" ? "bg-primary cursor-none" : "bg-dark  hover:underline"} focus-visible:outline-accent`}
          >
            <FaEdit /> <span className="hidden md:inline-block">{create}</span>
          </Link>
          <Link
            href="/saved"
            title={saved}
            tabIndex={pathname === "/saved" ? -1 : 0}
            className={`rounded-md text-light p-2 flex gap-2 items-center ${pathname === "/saved" ? "bg-primary cursor-none" : "bg-dark hover:underline"} focus-visible:outline-accent`}
          >
            <FaBookmark /> <span className="hidden md:inline-block">{saved}</span>
          </Link>
        </nav>
  );
}
