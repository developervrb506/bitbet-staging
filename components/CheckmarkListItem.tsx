import React from "react";
import Image from "next/image";

interface CheckmarkListItemProps {
  children: React.ReactNode;
  align?: "start" | "center";
  className?: string;
}

export default function CheckmarkListItem({ children, align = "start", className = "" }: CheckmarkListItemProps) {
  return (
    <li className={`flex gap-4 ${align === "start" ? "items-start" : "items-center"} ${className}`}>
      <div className={`relative w-6 h-6 shrink-0 ${align === "start" ? "mt-0.5" : ""}`}>
        <Image
          src="/bonuscheckmark.svg"
          alt="Checkmark"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </li>
  );
}
