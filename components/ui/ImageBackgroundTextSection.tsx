import Image from "next/image";
import type { ReactNode } from "react";

export type ImageBackgroundTextContent = {
  backgroundImage?: string;
  backgroundPosition?: string;
  heading?: ReactNode;
  highlightedHeading?: ReactNode;
  description?: ReactNode | ReactNode[];
};

type ImageBackgroundTextSectionProps = {
  content: ImageBackgroundTextContent;
};

export default function ImageBackgroundTextSection({
  content,
}: ImageBackgroundTextSectionProps) {
  const descriptions = Array.isArray(content.description)
    ? content.description
    : content.description
      ? [content.description]
      : [];

  const hasHeading = Boolean(content.heading || content.highlightedHeading);

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden py-20 lg:py-28">
      {content.backgroundImage ? (
        <div
          className="absolute inset-0"
          aria-hidden="true"
        >
          <Image
            src={content.backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: content.backgroundPosition ?? "center" }}
            priority
          />
        </div>
      ) : null}

      <div
        className="absolute inset-0"
        // style={{
        //   background:
        //     "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.6) 100%)",
        // }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[994px] mx-auto text-center">
              {hasHeading ? (
                <h2 className="font-antonio font-bold text-4xl sm:text-5xl lg:text-5xl uppercase leading-tight mb-8">
                  {content.heading}
                  {content.heading && content.highlightedHeading ? " " : null}
                  {content.highlightedHeading ? (
                    <span className="text-[#EF4424]">
                      {content.highlightedHeading}
                    </span>
                  ) : null}
                </h2>
              ) : null}

              {descriptions.length > 0 ? (
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-lg tracking-[-0.02em]">
                  {descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
