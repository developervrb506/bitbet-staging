"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-72 h-full bg-[#111111] border-l border-white/10 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-[#d32f2f] text-xl font-black tracking-tight">
            SBO
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-gray-400 hover:text-white rounded transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth CTAs */}
        <div className="px-6 py-6 border-t border-white/10 space-y-3">
          <Button variant="outline" size="md" fullWidth>
            Log In
          </Button>
          <Button variant="primary" size="md" fullWidth>
            Join Now — It&apos;s Free
          </Button>
        </div>
      </div>
    </div>
  );
}
