"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { menuItems, type MenuItem } from "@/lib/translations";

interface MenuCardProps {
  item: MenuItem;
  priority?: boolean;
}

function MenuCard({ item, priority = false }: MenuCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative aspect-square bg-muted">
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
      <div className="p-2.5">
        <h3 className="text-sm font-bold text-card-foreground leading-tight line-clamp-1 mb-1">
          {item.name[language]}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug line-clamp-2 mb-2 min-h-[2rem]">
          {item.description[language]}
        </p>
        <span className="text-sm font-bold text-primary">
          ${item.price}
        </span>
      </div>
    </div>
  );
}

interface MenuListProps {
  category: "food" | "drinks" | "desserts";
}

export function MenuList({ category }: MenuListProps) {
  const filteredItems = menuItems.filter((item) => item.category === category);

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredItems.map((item, index) => (
          <MenuCard key={item.id} item={item} priority={index < 4} />
        ))}
      </div>
    </div>
  );
}
