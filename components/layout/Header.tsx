"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0B]/95 backdrop-blur-[5.12px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90px] items-center justify-between">
          <div className="shrink-0">
            <Image src="/bitbet.svg" alt="BitBet Logo" width={156} height={60} className="w-auto h-auto" priority unoptimized />
          </div>

          <div className="flex items-center gap-1">
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
            <div className="flex gap-x-5"> <button className="w-[114px] h-[50px] rounded-[12px] bg-linear-to-b from-[#D0D3D4] to-[#888B8E] text-white font-montserrat font-bold  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
              LOGIN
            </button>
              <button className="px-8 h-[50px] rounded-[12px] bg-linear-to-b from-[#F58728] to-[#E25C08] text-white font-montserrat font-bold  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
