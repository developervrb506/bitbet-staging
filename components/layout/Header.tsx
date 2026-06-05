"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "./Navbar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0B]/95 backdrop-blur-[5.12px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90px] items-center justify-between">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/bitbet.svg"
                alt="BitBet Logo"
                width={156}
                height={60}
                className="w-auto h-auto"
                style={{ width: 'auto', height: 'auto' }}
                unoptimized
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <input
              type="text"
              placeholder="Username"
              className="w-[250px] font-sora h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.07)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-none px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm font-medium"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[250px] font-sora h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.07)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-none px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm font-medium"
            />
            <div className="flex gap-x-5">
              {" "}
              <button className="w-[114px] h-[50px] rounded-[12px] bg-linear-to-b from-[#D0D3D4] to-[#888B8E] text-white font-montserrat font-bold  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
                LOGIN
              </button>
              <button className="px-8 h-[50px] rounded-[12px] bg-linear-to-b from-[#F39120] to-[#EB6331] text-white font-montserrat font-bold  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
                JOIN NOW
              </button>
            </div>
          </div>

          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-[90px] left-0 w-full bg-[#0A0A0B] shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[calc(100vh-90px)] border-t border-gray-800 opacity-100"
            : "max-h-0 border-transparent opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-90px)]">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full font-sora h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.07)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-none px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm font-medium"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full font-sora h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.07)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-none px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm font-medium"
            />
            <div className="flex gap-4 mt-2">
              <button className="flex-1 h-[50px] rounded-[12px] bg-linear-to-b from-[#D0D3D4] to-[#888B8E] text-white font-montserrat font-bold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
                LOGIN
              </button>
              <button className="flex-1 h-[50px] rounded-[12px] bg-linear-to-b from-[#F39120] to-[#EB6331] text-white font-montserrat font-bold shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
                JOIN NOW
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 pb-2">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-2 py-3 rounded-md font-sora font-medium transition-colors ${
                        isActive
                          ? "text-[#F58728] bg-white/5"
                          : "text-white hover:text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
