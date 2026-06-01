"use client";

import { useLocale } from "./language-context";
import { getLocalizedText } from "@/lib/locale";
import type { Category } from "@/types";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const { locale } = useLocale();

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-[57px] z-40 bg-background border-b border-border">
      <div className="px-3 py-2.5">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground border border-border hover:bg-secondary"
              }`}
            >
              {getLocalizedText(category.title, locale)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
