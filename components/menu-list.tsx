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
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-card-foreground leading-tight">
            {item.name[language]}
          </h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap">
            ${item.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description[language]}
        </p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <MenuCard key={item.id} item={item} priority={index < 3} />
        ))}
      </div>
    </div>
  );
}
