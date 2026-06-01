"use client";

import Image from "next/image";
import { useLocale } from "./language-context";
import { getLocalizedText } from "@/lib/locale";
import { translations } from "@/lib/translations";
import type { MenuItem } from "@/types";

interface FeaturedItemsProps {
  items: MenuItem[];
}

export function FeaturedItems({ items }: FeaturedItemsProps) {
  const { locale } = useLocale();
  const t = translations[locale];

  const featuredItems = items.filter((item) => item.featured);

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  if (featuredItems.length === 0) {
    return null;
  }

  return (
    <section className="px-3 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-foreground">{t.featured.title}</h2>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 -mx-3 px-3">
        {featuredItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-36 bg-card rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative aspect-square bg-muted">
              <Image
                src={item.image}
                alt={getLocalizedText(item.name, locale)}
                fill
                className="object-cover"
                sizes="144px"
                priority={index < 3}
              />
              {item.soldOutToday && (
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[10px] font-semibold rounded-md bg-foreground/80 text-background">
                  {t.menu.soldOut}
                </span>
              )}
            </div>
            <div className="p-2">
              <h3 className="text-xs font-semibold text-card-foreground leading-tight line-clamp-1 mb-1">
                {getLocalizedText(item.name, locale)}
              </h3>
              <span className="text-xs font-bold text-primary">
                {formatPrice(item.taxIncludedPrice)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
