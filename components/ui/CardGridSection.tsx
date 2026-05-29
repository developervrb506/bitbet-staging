import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type CardGridAction = {
  label: string;
  href: string;
  variant?: "solid" | "outline" | "text";
};

type CardGridMetaItem = {
  label: string;
};

export type CardGridItem = {
  title: string;
  description?: ReactNode;
  image: string;
  imageAlt?: string;
  href?: string;
  meta?: CardGridMetaItem[];
  cta?: CardGridAction;
  actions?: CardGridAction[];
};

type CardGridSectionProps = {
  items: CardGridItem[];
  className?: string;
  cardClassName?: string;
};

function actionClassName(variant: CardGridAction["variant"]) {
  return [
    "inline-flex items-center justify-center text-sm font-medium tracking-wider transition-colors duration-200",
    variant === "text"
      ? "text-[#EF4424] hover:text-white underline"
      : variant === "outline"
        ? "px-5 py-2.5 rounded border border-[#EF4424] text-[#EF4424] hover:bg-[#EF4424] hover:text-white"
        : "px-5 py-2.5 rounded bg-[#EF4424] hover:bg-[#c62828] text-white",
  ].join(" ");
}

function CardContent({ item }: { item: CardGridItem }) {
  return (
    <>
      <div className="relative h-70 overflow-hidden z-2">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="mt-[30px] relative z-2">
        <h3 className="text-white font-antonio font-bold text-2xl uppercase mb-3">
          {item.title}
        </h3>

        {item.description ? (
          <p className="text-gray-200 text-lg leading-relaxed tracking-[-0.02em]">
            {item.description}
          </p>
        ) : null}

        {item.meta && item.meta.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {item.meta.map((metaItem) => (
              <span
                key={metaItem.label}
                className="inline-flex min-h-8 items-center rounded border border-white/15 bg-white/[0.03] px-3 text-sm text-gray-200"
              >
                {metaItem.label}
              </span>
            ))}
          </div>
        ) : null}

        {item.actions && item.actions.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {item.actions.map((action) => (
              <Link
                key={`${action.href}-${action.label}`}
                href={action.href}
                className={actionClassName(action.variant)}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : item.cta ? (
          <div className="mt-6">
            <Link href={item.cta.href} className={actionClassName(item.cta.variant)}>
              {item.cta.label}
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default function CardGridSection({
  items,
  className = "",
  cardClassName,
}: CardGridSectionProps) {
  return (
    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-9 ${className}`}>
      {items.map((item) => {
        const defaultCardClassName =
          "p-[30px] group rounded-xl relative custcard overflow-hidden bg-[#ffffff0d] from-[#5A2418] to-[#2B0D08] hover:shadow-lg hover:shadow-black/50 transition-all duration-300";
        const resolvedCardClassName = cardClassName ?? defaultCardClassName;

        if (item.href && !item.cta && !item.actions?.length) {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`${resolvedCardClassName} block cursor-pointer`}
            >
              <CardContent item={item} />
            </Link>
          );
        }

        return (
          <div
            key={item.title}
            className={`${resolvedCardClassName} ${item.cta || item.actions ? "" : "cursor-default"}`}
          >
            <CardContent item={item} />
          </div>
        );
      })}
    </div>
  );
}
