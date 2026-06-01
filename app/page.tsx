import { client } from "@/lib/sanity";
import {
  categoriesQuery,
  menuItemsQuery,
  promotionBannersQuery,
} from "@/lib/queries";
import {
  mapCategories,
  mapMenuItems,
  mapPromotionBanners,
} from "@/lib/sanity/map";
import { MenuPage } from "@/components/menu-page";

export default async function Home() {
  const [categoriesRaw, menuItemsRaw, promotionsRaw] = await Promise.all([
    client.fetch(categoriesQuery),
    client.fetch(menuItemsQuery),
    client.fetch(promotionBannersQuery),
  ]);

  const categories = mapCategories(categoriesRaw);
  const menuItems = mapMenuItems(menuItemsRaw);
  const promotions = mapPromotionBanners(promotionsRaw);

  return (
    <MenuPage
      categories={categories}
      menuItems={menuItems}
      promotions={promotions}
    />
  );
}
