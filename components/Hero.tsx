import Image from "next/image";
import React from "react";

interface HeroProps {
  backgroundImage?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  priority?: boolean;
}

export default function Hero({
  backgroundImage = "/herobanner.png",
  title,
  description,
  buttonText,
  onButtonClick,
  priority = false,
}: HeroProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden  ">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority={priority}
        />
        {/* Dark gradient overlay to improve text readability on mobile and tablet screens */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/25 lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto  max-w-[1440px] px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-sora max-w-[505px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 text-sm md:text-lg mb-7 max-w-lg leading-relaxed font-sora drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {description}
            </p>
          )}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-linear-to-b from-[#F58728] to-[#E25C08] text-white font-montserrat font-bold  py-3 px-8 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all text-uppercase"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
