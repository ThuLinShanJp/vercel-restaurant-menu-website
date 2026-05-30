"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "./language-context";
import { menuItems, type MenuItem } from "@/lib/translations";
import { ArrowUpDown, Search } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  priority?: boolean;
}

function MenuCard({ item, priority = false }: MenuCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square bg-muted">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover"
          sizes="50vw"
          priority={priority}
        />
      </div>
      <div className="p-2">
        <h3 className="text-xs font-semibold text-card-foreground leading-tight line-clamp-1 mb-0.5">
          {item.name[language]}
        </h3>
        <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2 mb-1.5 min-h-[1.75rem]">
          {item.description[language]}
        </p>
        <span className="text-xs font-bold text-primary">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

type SortOption = "default" | "price-asc" | "price-desc" | "name";

interface MenuListProps {
  category: "food" | "drinks" | "desserts";
}

export function MenuList({ category }: MenuListProps) {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortLabels: Record<SortOption, { en: string; jp: string }> = {
    default: { en: "Default", jp: "デフォルト" },
    "price-asc": { en: "Price: Low", jp: "価格: 安い順" },
    "price-desc": { en: "Price: High", jp: "価格: 高い順" },
    name: { en: "Name", jp: "名前順" },
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
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder={language === "en" ? "Search..." : "検索..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-3 text-xs bg-card border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="h-8 pl-2.5 pr-7 text-xs bg-card border border-border rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
          >
            {(Object.keys(sortLabels) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {sortLabels[option][language]}
              </option>
            ))}
          </select>
          <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Menu Grid - Always 2 columns minimum */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {processedItems.map((item, index) => (
          <MenuCard key={item.id} item={item} priority={index < 4} />
        ))}
      </div>

      {/* Empty State */}
      {processedItems.length === 0 && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          {language === "en" ? "No items found" : "アイテムが見つかりません"}
        </div>
      )}
    </div>
  );
}
