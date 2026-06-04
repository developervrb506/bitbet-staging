"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function FloatingNav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll events: calculate progress and toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicks outside the floating menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVGs for the navigation links
  const links: NavLink[] = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "About",
      href: "/about",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Bonus",
      href: "/bonus",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 4v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0h-4m-12 0h4m0 0v7m-4-7h16"
          />
        </svg>
      ),
    },
    {
      name: "Cryptos",
      href: "/cryptos",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Play",
      href: "/play-for-fun",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Promotions",
      href: "/casino-promotions",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  // Circle calculations for progress ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-4 right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* Slide-out Menu Tray */}
      <div
        className={`flex items-center gap-2 pr-1 transition-all duration-300 ease-out origin-right ${
          isOpen
            ? "max-w-md opacity-100 translate-x-0"
            : "max-w-0 opacity-0 translate-x-4 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="flex items-center gap-2 bg-[#0A0A0B]/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-2xl">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                }}
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 transform ${
                  isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
                } ${
                  isActive
                    ? "bg-[#EB6331] border-[#EB6331] text-white shadow-[0_0_12px_rgba(235,99,49,0.5)]"
                    : "bg-surface-800/80 border-white/10 text-gray-400 hover:text-white hover:border-[#EB6331]/50 hover:bg-[#1a1a1c]"
                }`}
              >
                {link.icon}

                {/* Tooltip */}
                <span className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#0A0A0B] border border-white/10 text-white font-sora text-[11px] font-semibold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Buttons Group */}
      <div className="flex gap-2.5">
        {/* Scroll To Top Button with Progress Indicator */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="relative w-12 h-12 rounded-full flex items-center justify-center bg-[#0A0A0B]/95 border border-white/10 text-white hover:text-[#EB6331] hover:border-[#EB6331]/30 cursor-pointer shadow-lg transition-all duration-300 group overflow-visible"
        >
          {/* Scroll Progress Ring SVG */}
          <svg
            className="absolute inset-[-3px] w-[54px] h-[54px] -rotate-90 pointer-events-none"
            viewBox="0 0 54 54"
          >
            {/* Background ring */}
            <circle
              cx="27"
              cy="27"
              r={radius}
              className="fill-none stroke-white/5"
              strokeWidth="2"
            />
            {/* Progress ring */}
            <circle
              cx="27"
              cy="27"
              r={radius}
              className="fill-none transition-all duration-100 ease-out"
              stroke="url(#progress-gradient)"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="progress-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F39120" />
                <stop offset="100%" stopColor="#EB6331" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow Icon */}
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Tooltip */}
          <span className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#0A0A0B] border border-white/10 text-white font-sora text-[11px] font-semibold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
}
