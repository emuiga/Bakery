import Link from "next/link";
import { waUrl } from "@/lib/waUrl";

interface NavbarProps {
  whatsappNumber?: string;
}

export function Navbar({ whatsappNumber }: NavbarProps) {
  return (
    <header className="bg-[#FDFBF7] border-b border-black/8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 shrink-0">
            <span
              className="font-playlist text-[2rem] leading-none"
              style={{ color: "rgb(228, 121, 143)" }}
            >
              Joyful
            </span>
            <span
              className="font-aeonik font-800 text-[1.1rem] tracking-tight"
              style={{ color: "#0f172b" }}
            >
              Bakery
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold">
            <Link
              href="/menu"
              className="text-[#0f172b] hover:text-[rgb(228,121,143)] transition-colors"
            >
              Order
            </Link>
            <Link
              href="/menu"
              className="text-[#0f172b] hover:text-[rgb(228,121,143)] transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/#location"
              className="text-[#0f172b] hover:text-[rgb(228,121,143)] transition-colors"
            >
              Find Us
            </Link>
            <Link
              href="/#about"
              className="text-[#0f172b] hover:text-[rgb(228,121,143)] transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Search bar — "What are you looking for today?" */}
          <Link
            href="/menu"
            className="hidden lg:flex flex-1 max-w-xs items-center gap-2 px-4 py-2 rounded-full border border-black/15 text-sm text-gray-400 hover:border-[rgb(228,121,143)] hover:text-gray-600 transition-colors ml-auto"
          >
            <SearchIcon />
            <span>What are you looking for today?</span>
          </Link>

          {/* WhatsApp CTA (mobile) */}
          {whatsappNumber && (
            <a
              href={waUrl(whatsappNumber, "Hi! I'd like to place an order.") ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto lg:ml-4 shrink-0 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "rgb(228, 121, 143)" }}
            >
              Order Now
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
