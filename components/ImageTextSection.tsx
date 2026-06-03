import Image from "next/image";
import React from "react";

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
  imagePosition?: "left" | "right";
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  imagePosition = "left",
}: ImageTextSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex flex-col gap-8 md:gap-16 w-full items-center ${
          imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="w-full md:w-1/2  overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            // className={`object-contain ${
            //   imagePosition === "right" ? "md:object-right" : "md:object-left"
            // }`}
            className="relative!"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-white/80 font-sora text-sm md:text-base leading-relaxed">
          <h2 className="text-3xl md:text-[46px] font-bold font-sora leading-tight text-white mb-4">
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
