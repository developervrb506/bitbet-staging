"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Sportsbook",         href: "/sportsbook" },
  { label: "Racebook",           href: "/racebook" },
  { label: "Casino",             href: "/casino" },
  { label: "Live Betting",       href: "/live-betting" },
  { label: "Cashier",            href: "/cashier" },
  { label: "Casino Promotions",  href: "/casino-promotions" },
  { label: "Sports Promotions",  href: "/sports-promotions" },
  { label: "10% Bonus",          href: "/bonus" },
  { label: "Buy Bitcoin",        href: "/buy-bitcoin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-[56px] z-40 bg-[#111111] border-b border-white/5"
      aria-label="Main navigation"
    >
      {/* ── Desktop strip ── */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
        <ul className="hidden lg:flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "relative flex items-center px-3.5 xl:px-4 py-3.5 text-[13px] font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-150",
                    isActive
                      ? "text-white bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e53935]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Mobile row ── */}
        <div className="lg:hidden flex items-center justify-between h-11">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            Navigation
          </span>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-white/5">
          <ul className="max-w-[1440px] mx-auto px-4 py-2 grid grid-cols-2 gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "flex items-center px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-sm",
                      isActive
                        ? "text-white bg-white/5"
                        : "text-gray-400 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
