export default function Header() {
  return (
    <header className="bg-primary-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">TextSticky</h1>
        <nav className="flex gap-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/create" className="hover:underline">
            Create
          </a>
        </nav>
      </div>
    </header>
  );
}
