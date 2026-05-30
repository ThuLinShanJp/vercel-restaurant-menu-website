"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { translations, menuItems } from "@/lib/translations";

export function FeaturedItems() {
  const { language } = useLanguage();
  const t = translations[language];

  const featuredItems = menuItems.filter((item) => item.featured);

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <section className="px-3 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-foreground">{t.featured.title}</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 -mx-3 px-3">
        {featuredItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-36 bg-card rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative aspect-square bg-muted">
              <Image
                src={item.image}
                alt={item.name[language]}
                fill
                className="object-cover"
                sizes="144px"
                priority={index < 3}
              />
            </div>
            <div className="p-2">
              <h3 className="text-xs font-semibold text-card-foreground leading-tight line-clamp-1 mb-1">
                {item.name[language]}
              </h3>
              <span className="text-xs font-bold text-primary">
                {formatPrice(item.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
