"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "./language-context";
import { translations, menuItems, type MenuItem } from "@/lib/translations";
import { ArrowUpDown, Search } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  priority?: boolean;
}

function MenuCard({ item, priority = false }: MenuCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
        />
      </div>
      
      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-bold text-card-foreground leading-tight line-clamp-1 mb-1">
          {item.name[language]}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2 mb-2 min-h-[2rem]">
          {item.description[language]}
        </p>
        
        {/* Price Section */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-primary">
            {formatPrice(item.price)}
            <span className="text-[10px] font-normal text-muted-foreground ml-1">
              ({t.menu.taxIncluded})
            </span>
          </span>
          {item.priceExcludingTax && (
            <span className="text-[10px] text-muted-foreground">
              {formatPrice(item.priceExcludingTax)} {t.menu.taxExcluded}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

type SortOption = "default" | "price-asc" | "price-desc" | "name";

interface MenuListProps {
  category: "food" | "drinks" | "desserts" | "seasonal";
}

export function MenuList({ category }: MenuListProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortLabels: Record<SortOption, string> = {
    default: t.menu.sort.default,
    "price-asc": t.menu.sort.priceAsc,
    "price-desc": t.menu.sort.priceDesc,
    name: t.menu.sort.name,
  };

  const processedItems = useMemo(() => {
    let items = menuItems.filter((item) => item.category === category);

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name[language].toLowerCase().includes(query) ||
          item.description[language].toLowerCase().includes(query)
      );
    }

    // Sort items
    switch (sortBy) {
      case "price-asc":
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case "name":
        items = [...items].sort((a, b) =>
          a.name[language].localeCompare(b.name[language])
        );
        break;
      default:
        break;
    }

    return items;
  }, [category, searchQuery, sortBy, language]);

  return (
    <div className="px-3 py-3">
      {/* Search and Sort Bar */}
      <div className="flex gap-2 mb-3">
        {/* Search Input */}
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

        {/* Sort Dropdown */}
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

      {/* Menu Grid - Always 2 columns minimum */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {processedItems.map((item, index) => (
          <MenuCard key={item.id} item={item} priority={index < 4} />
        ))}
      </div>

      {/* Empty State */}
      {processedItems.length === 0 && (
        <div className="text-center py-12 text-muted-foreground text-sm">
          {t.menu.noItems}
        </div>
      )}
    </div>
  );
}
