export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TextSticky. All rights reserved.
        </p>
        <nav className="flex justify-center gap-4 mt-2">
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
