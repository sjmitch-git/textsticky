import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">TextSticky</h1>
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/create" className="hover:underline">
            Create
          </Link>
        </nav>
      </div>
    </header>
  );
}
