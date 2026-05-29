"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileFormOpen, setMobileFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[56px] gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="SportsBettingOnline home"
          >
            <Image
              src="/logo.png"
              alt="SportsBettingOnline"
              width={160}
              height={44}
              className="h-10 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* ── Desktop login form ── */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden lg:flex items-center gap-2"
            aria-label="Login"
          >
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="w-40 xl:w-48 px-3 py-1.5 bg-[#1c1c1c] border border-white/15 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors duration-150"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-40 xl:w-48 px-3 py-1.5 bg-[#1c1c1c] border border-white/15 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors duration-150"
            />

            {/* Login — red */}
            <button
              type="submit"
              className="px-5 py-1.5 bg-[#FB411C] hover:bg-[#c62828] text-white text-sm tracking-wide rounded transition-colors duration-150 whitespace-nowrap"
            >
              Login
            </button>

            {/* Cashier — green */}
            <button
              type="button"
              className="px-5 py-1.5 bg-[#00A90B] hover:bg-[#1b5e20] text-white text-sm tracking-wide rounded transition-colors duration-150 whitespace-nowrap"
            >
              Cashier
            </button>
          </form>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileFormOpen((v) => !v)}
            aria-label="Toggle login"
            aria-expanded={mobileFormOpen}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#e53935] hover:bg-[#c62828] text-white text-xs font-bold uppercase tracking-wide rounded-sm transition-colors duration-150"
          >
            Login
          </button>
        </div>
      </div>

      {/* ── Mobile login dropdown ── */}
      {mobileFormOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#0f0f0f] px-4 py-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2.5 max-w-sm mx-auto"
            aria-label="Mobile login"
          >
            <input
              type="text"
              placeholder="User Name"
              autoComplete="username"
              className="w-full px-3 py-2 bg-[#1c1c1c] border border-white/15 rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full px-3 py-2 bg-[#1c1c1c] border border-white/15 rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2 bg-[#e53935] hover:bg-[#c62828] text-white text-sm font-bold uppercase tracking-wide rounded-sm transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-bold uppercase tracking-wide rounded-sm transition-colors"
              >
                Cashier
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}
