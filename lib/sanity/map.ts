import { urlFor } from "@/sanity/lib/image";
import type {
  Category,
  MenuItem,
  PromotionBanner,
  SanityCategory,
  SanityMenuItem,
  SanityPromotionBanner,
} from "@/types";
import type { LocalizedText } from "@/types";
import type { SanityImageSource } from "@sanity/image-url";

type SanityImageResult = {
  asset?: { _id?: string; url?: string } | null;
} | null;

function toLocalizedText(
  value?: { en?: string | null; ja?: string | null } | null
): LocalizedText {
  return {
    en: value?.en ?? "",
    ja: value?.ja ?? "",
  };
}

function resolveImageUrl(image?: SanityImageResult | string | null): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (image.asset?.url) return image.asset.url;
  return urlFor(image as SanityImageSource).width(1200).url();
}

function isWithinSchedule(startDate?: string | null, endDate?: string | null): boolean {
  const now = Date.now();
  if (startDate && new Date(startDate).getTime() > now) return false;
  if (endDate && new Date(endDate).getTime() < now) return false;
  return true;
}

export function mapCategory(doc: SanityCategory): Category {
  return {
    id: doc._id,
    title: toLocalizedText(doc.title),
    order: doc.order ?? 0,
  };
}

export function mapMenuItem(
  doc: SanityMenuItem & { category?: { _id: string } | null }
): MenuItem | null {
  const categoryId =
    typeof doc.category === "string"
      ? doc.category
      : doc.category?._id;

  if (!categoryId) return null;

  const image =
    resolveImageUrl(
      doc.image as SanityImageResult | string | null | undefined
    ) || "/icon.svg";

  return {
    id: doc._id,
    name: toLocalizedText(doc.name),
    description: toLocalizedText(doc.description),
    image,
    category: categoryId,
    taxIncludedPrice: doc.taxIncludedPrice ?? 0,
    taxExcludedPrice: doc.taxExcludedPrice ?? undefined,
    featured: doc.featured ?? false,
    soldOutToday: doc.soldOutToday ?? false,
    available: doc.available ?? true,
    displayOrder: doc.displayOrder ?? 0,
  };
}

export function mapPromotionBanner(
  doc: SanityPromotionBanner & {
    startDate?: string | null;
    endDate?: string | null;
  }
): PromotionBanner | null {
  if (doc.active === false) return null;
  if (!isWithinSchedule(doc.startDate, doc.endDate)) return null;

  const image = resolveImageUrl(
    doc.image as SanityImageResult | string | null | undefined
  );
  if (!image) return null;

  return {
    id: doc._id,
    title: toLocalizedText(doc.title),
    description: toLocalizedText(doc.description),
    image,
    active: doc.active ?? true,
    priority: doc.priority ?? 0,
  };
}

export function mapCategories(docs: SanityCategory[]): Category[] {
  return docs.map(mapCategory);
}

export function mapMenuItems(
  docs: (SanityMenuItem & { category?: { _id: string } | null })[]
): MenuItem[] {
  return docs
    .map(mapMenuItem)
    .filter((item): item is MenuItem => item !== null);
}

export function mapPromotionBanners(
  docs: (SanityPromotionBanner & {
    startDate?: string | null;
    endDate?: string | null;
  })[]
): PromotionBanner[] {
  return docs
    .map(mapPromotionBanner)
    .filter((banner): banner is PromotionBanner => banner !== null);
}
