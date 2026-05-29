"use client";

import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#d32f2f] hover:bg-[#b71c1c] text-white shadow-lg shadow-red-900/30",
  secondary:
    "bg-[#e65100] hover:bg-[#bf360c] text-white shadow-lg shadow-orange-900/30",
  outline:
    "border border-[#d32f2f] text-[#ef5350] hover:bg-[#d32f2f] hover:text-white",
  ghost: "text-gray-300 hover:text-white hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
