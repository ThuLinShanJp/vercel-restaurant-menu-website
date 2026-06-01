"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { getLocalizedText, type Locale } from "@/lib/locale";
import { translations } from "@/lib/translations";
import type { MenuItem } from "@/types";
import { ArrowUpDown, Search } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  locale: Locale;
  priority?: boolean;
}

function MenuCard({ item, locale, priority = false }: MenuCardProps) {
  const t = translations[locale];

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={item.image}
          alt={getLocalizedText(item.name, locale)}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
        />
        {item.soldOutToday && (
          <span className="absolute top-2 left-2 px-2 py-1 text-[10px] font-semibold rounded-md bg-foreground/85 text-background">
            {t.menu.soldOut}
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold text-card-foreground leading-tight line-clamp-1 mb-1">
          {getLocalizedText(item.name, locale)}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2 mb-2 min-h-[2rem]">
          {getLocalizedText(item.description, locale)}
        </p>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-primary">
            {formatPrice(item.taxIncludedPrice)}
            <span className="text-[10px] font-normal text-muted-foreground ml-1">
              ({t.menu.taxIncluded})
            </span>
          </span>
          {item.taxExcludedPrice != null && (
            <span className="text-[10px] text-muted-foreground">
              {formatPrice(item.taxExcludedPrice)} {t.menu.taxExcluded}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

type SortOption = "default" | "price-asc" | "price-desc" | "name";

interface MenuListProps {
  menuItems: MenuItem[];
  selectedCategory: string;
  locale: Locale;
}

export function MenuList({
  menuItems,
  selectedCategory,
  locale,
}: MenuListProps) {
  const t = translations[locale];
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortLabels: Record<SortOption, string> = {
    default: t.menu.sort.default,
    "price-asc": t.menu.sort.priceAsc,
    "price-desc": t.menu.sort.priceDesc,
    name: t.menu.sort.name,
  };

  const processedItems = useMemo(() => {
    let items = menuItems.filter(
      (item) => item.available && item.category === selectedCategory
    );

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter((item) => {
        const name = getLocalizedText(item.name, locale).toLowerCase();
        const description = getLocalizedText(item.description, locale).toLowerCase();
        return name.includes(query) || description.includes(query);
      });
    }

    switch (sortBy) {
      case "price-asc":
        items = [...items].sort(
          (a, b) => a.taxIncludedPrice - b.taxIncludedPrice
        );
        break;
      case "price-desc":
        items = [...items].sort(
          (a, b) => b.taxIncludedPrice - a.taxIncludedPrice
        );
        break;
      case "name":
        items = [...items].sort((a, b) =>
          getLocalizedText(a.name, locale).localeCompare(
            getLocalizedText(b.name, locale)
          )
        );
        break;
      default:
        items = [...items].sort((a, b) => a.displayOrder - b.displayOrder);
        break;
    }

    return items;
  }, [menuItems, selectedCategory, searchQuery, sortBy, locale]);

  return (
    <div className="px-3 py-3">
      <div className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.menu.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-3 text-sm bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="h-10 pl-3 pr-8 text-sm bg-card border border-border rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
          >
            {(Object.keys(sortLabels) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {sortLabels[option]}
              </option>
            ))}
          </select>
          <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {processedItems.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            locale={locale}
            priority={index < 4}
          />
        ))}
      </div>

      {processedItems.length === 0 && (
        <div className="text-center py-12 text-muted-foreground text-sm">
          {t.menu.noItems}
        </div>
      )}
    </div>
  );
}
