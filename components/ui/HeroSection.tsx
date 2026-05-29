import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type HeroButtonVariant = "primary" | "outline" | "text";
type HeroButtonPresetColor = "red" | "white" | "green";
type HeroButtonStyle = CSSProperties & Record<`--${string}`, string>;

export type HeroButton = {
  label: string;
  href: string;
  variant?: HeroButtonVariant;
  color?: HeroButtonPresetColor | string;
  hoverColor?: string;
  textColor?: string;
};

export type HeroTrustBadge = {
  label: string;
  icon: ReactNode;
};

export type HeroDescription = {
  text: ReactNode;
};

export type HeroSectionContent = {
  bgImage?: string;
  bgPosition?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode | HeroDescription[];
  buttons?: HeroButton[];
  trustBadges?: HeroTrustBadge[];
  showButtons?: boolean;
  showTrustBadges?: boolean;
  showBottomFade?: boolean;
};

type HeroSectionProps = {
  content: HeroSectionContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  const {
    bgImage,
    bgPosition = "center center",
    title,
    subtitle,
    description,
    buttons = [],
    trustBadges = [],
    showButtons = true,
    showTrustBadges = true,
    showBottomFade = true,
  } = content;

  const hasHeading = Boolean(title || subtitle);
  const descriptions = Array.isArray(description)
    ? description
    : description
      ? [{ text: description }]
      : [];
  const shouldShowButtons = showButtons && buttons.length > 0;
  const shouldShowTrustBadges = showTrustBadges && trustBadges.length > 0;
  const buttonColorClasses: Record<
    HeroButtonPresetColor,
    Record<HeroButtonVariant, string>
  > = {
    red: {
      primary: "bg-[#EF4424] hover:bg-[#c62828] text-white shadow-lg shadow-red-900/40",
      outline: "border border-[#EF4424] text-[#EF4424] hover:bg-[#EF4424] hover:text-white",
      text: "text-[#EF4424] hover:text-white",
    },
    white: {
      primary: "bg-white hover:bg-gray-200 text-black shadow-lg shadow-black/30",
      outline: "border border-white text-white hover:bg-white hover:text-black",
      text: "text-white hover:text-[#EF4424]",
    },
    green: {
      primary: "bg-[#00A90B] hover:bg-[#1b5e20] text-white shadow-lg shadow-green-900/30",
      outline: "border border-[#00A90B] text-[#00A90B] hover:bg-[#00A90B] hover:text-white",
      text: "text-[#00A90B] hover:text-white",
    },
  };
  const presetColors = Object.keys(buttonColorClasses) as HeroButtonPresetColor[];

  function getButtonColorClasses(button: HeroButton, variant: HeroButtonVariant) {
    const color = button.color ?? (variant === "outline" ? "white" : "red");

    if (presetColors.includes(color as HeroButtonPresetColor)) {
      return {
        className: buttonColorClasses[color as HeroButtonPresetColor][variant],
        style: undefined,
      };
    }

    const style: HeroButtonStyle = {
      "--hero-button-color": color,
      "--hero-button-hover-color": button.hoverColor ?? color,
      "--hero-button-text-color": button.textColor ?? "white",
    };

    if (variant === "outline") {
      return {
        className:
          "border border-[var(--hero-button-color)] text-[var(--hero-button-color)] hover:bg-[var(--hero-button-hover-color)] hover:text-[var(--hero-button-text-color)]",
        style,
      };
    }

    if (variant === "text") {
      return {
        className:
          "text-[var(--hero-button-color)] hover:text-[var(--hero-button-hover-color)]",
        style,
      };
    }

    return {
      className:
        "bg-[var(--hero-button-color)] hover:bg-[var(--hero-button-hover-color)] text-[var(--hero-button-text-color)] shadow-lg shadow-black/30",
      style,
    };
  }

  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden">
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundPosition: bgPosition,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative z-10 w-full">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-2xl">
              {hasHeading ? (
                <h1
                  className="font-antonio font-bold text-[120px] uppercase leading-none tracking-tight mb-0"
                  style={{ width: "566px" }}
                >
                  {title ? (
                    <span
                      className="block text-white"
                      style={{
                        fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                        lineHeight: "1.5",
                      }}
                    >
                      {title}
                    </span>
                  ) : null}
                  {subtitle ? (
                    <span
                      className="block text-[#EF4424]"
                      style={{
                        fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                        lineHeight: "1",
                      }}
                    >
                      {subtitle}
                    </span>
                  ) : null}
                </h1>
              ) : null}

              {descriptions.length > 0 ? (
                <div className="space-y-4 font-inter text-[#FFFFFF] text-[15px] font-regular sm:text-base leading-relaxed mt-6 mb-8 max-w-2xl">
                  {descriptions.map((item, index) => (
                    <p key={index}>{item.text}</p>
                  ))}
                </div>
              ) : null}

              {shouldShowButtons ? (
                <div className="flex flex-wrap gap-3 mb-12">
                  {buttons.map((button) => {
                    const variant = button.variant ?? "primary";
                    const buttonColors = getButtonColorClasses(button, variant);

                    return (
                      <Link
                        key={button.href}
                        href={button.href}
                        style={buttonColors.style}
                        className={[
                          "inline-flex items-center rounded justify-center text-sm font-semibold uppercase tracking-wider transition-all duration-200",
                          variant === "text" ? "" : "px-6 py-2.5",
                          buttonColors.className,
                        ].join(" ")}
                      >
                        {button.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}

              {shouldShowTrustBadges ? (
                <div className="flex flex-wrap gap-6">
                  {trustBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2.5 text-[#FFFFFF] text-[15px] font-regular"
                    >
                      <span className="text-[#EF4424]">{badge.icon}</span>
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {showBottomFade ? (
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, black, transparent)" }}
          aria-hidden="true"
        />
      ) : null}
    </section>
  );
}
