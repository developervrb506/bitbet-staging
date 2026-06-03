"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Bonus", href: "/bonus" },
  { name: "Provability", href: "/provability" },
  { name: "Cryptos", href: "/cryptos" },
  { name: "Play For Fun", href: "/play-for-fun" },
  { name: "Casino Promotions", href: "/casino-promotions" },
  { name: "How to Buy Bitcoin?", href: "/how-to-buy-bitcoin" },
  { name: "Buy Bitcoin", href: "/buy-bitcoin" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[90px] z-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[45px] items-center justify-between gap-x-6 lg:gap-x-8 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sora font-medium whitespace-nowrap transition-colors ${
                  isActive ? "text-brand-gold" : "text-white hover:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
