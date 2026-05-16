import Link from "next/link";

interface NavbarProps {
  bakeryName: string;
}

export function Navbar({ bakeryName }: NavbarProps) {
  return (
    <header className="bg-[#FDFBF7] border-b border-[#F5F0E8] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-2xl text-[#2C1810] hover:text-[#C4673A] transition-colors">
            {bakeryName}
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#C4673A] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-sm font-medium text-gray-600 hover:text-[#C4673A] transition-colors"
            >
              Menu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
