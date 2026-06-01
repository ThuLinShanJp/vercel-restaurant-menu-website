/**
 * Sample restaurant menu content for Sanity.
 * Import via: npm run seed:sanity
 * Or: sanity dataset import sanity/seed/data.ndjson <dataset>
 */

export const categoryIds = {
  food: "category-food",
  drinks: "category-drinks",
  desserts: "category-desserts",
  seasonal: "category-seasonal",
} as const;

export const categories = [
  {
    _id: categoryIds.food,
    _type: "category" as const,
    title: { en: "Food", ja: "フード" },
    order: 0,
  },
  {
    _id: categoryIds.drinks,
    _type: "category" as const,
    title: { en: "Drinks", ja: "ドリンク" },
    order: 1,
  },
  {
    _id: categoryIds.desserts,
    _type: "category" as const,
    title: { en: "Desserts", ja: "デザート" },
    order: 2,
  },
  {
    _id: categoryIds.seasonal,
    _type: "category" as const,
    title: { en: "Seasonal", ja: "季節限定" },
    order: 3,
  },
];

type MenuItemSeed = {
  _id: string;
  categoryRef: string;
  name: { en: string; ja: string };
  description: { en: string; ja: string };
  taxIncludedPrice: number;
  taxExcludedPrice: number;
  featured: boolean;
  available: boolean;
  soldOutToday: boolean;
  displayOrder: number;
};

/** 10% consumption tax: tax-included = tax-excluded × 1.1 */
export function taxExcludedFromIncluded(included: number): number {
  return Math.round(included / 1.1);
}

export const menuItems: MenuItemSeed[] = [
  // Food (5)
  {
    _id: "menuItem-avocado-toast",
    categoryRef: categoryIds.food,
    name: { en: "Avocado Toast", ja: "アボカドトースト" },
    description: {
      en: "Smashed avocado on sourdough with poached egg, cherry tomatoes and microgreens",
      ja: "サワードウにアボカド、ポーチドエッグ、チェリートマト、マイクログリーン添え",
    },
    taxIncludedPrice: 1540,
    taxExcludedPrice: 1400,
    featured: true,
    available: true,
    soldOutToday: false,
    displayOrder: 0,
  },
  {
    _id: "menuItem-teriyaki-chicken-bowl",
    categoryRef: categoryIds.food,
    name: { en: "Teriyaki Chicken Bowl", ja: "照り焼きチキンボウル" },
    description: {
      en: "Grilled chicken with rice, edamame, avocado, pickled vegetables and sesame",
      ja: "グリルチキンとライス、枝豆、アボカド、ピクルス野菜、ごま添え",
    },
    taxIncludedPrice: 1760,
    taxExcludedPrice: 1600,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 1,
  },
  {
    _id: "menuItem-salmon-poke-salad",
    categoryRef: categoryIds.food,
    name: { en: "Salmon Poke Salad", ja: "サーモンポケサラダ" },
    description: {
      en: "Fresh salmon with mixed greens, cucumber, edamame and citrus ponzu dressing",
      ja: "新鮮なサーモンとミックスグリーン、キュウリ、枝豆、柑橘ポン酢ドレッシング",
    },
    taxIncludedPrice: 1980,
    taxExcludedPrice: 1800,
    featured: true,
    available: true,
    soldOutToday: false,
    displayOrder: 2,
  },
  {
    _id: "menuItem-crispy-tempura",
    categoryRef: categoryIds.food,
    name: { en: "Crispy Tempura", ja: "サクサク天ぷら" },
    description: {
      en: "Assorted shrimp and vegetable tempura with house-made dipping sauce",
      ja: "エビと野菜の盛り合わせ天ぷら、自家製つけダレ付き",
    },
    taxIncludedPrice: 1650,
    taxExcludedPrice: 1500,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 3,
  },
  {
    _id: "menuItem-tonkotsu-ramen",
    categoryRef: categoryIds.food,
    name: { en: "Tonkotsu Ramen", ja: "豚骨ラーメン" },
    description: {
      en: "Rich pork broth with chashu, soft-boiled egg, nori and green onions",
      ja: "濃厚豚骨スープにチャーシュー、半熟卵、海苔、ネギ",
    },
    taxIncludedPrice: 1870,
    taxExcludedPrice: 1700,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 4,
  },
  // Drinks (5)
  {
    _id: "menuItem-iced-matcha-latte",
    categoryRef: categoryIds.drinks,
    name: { en: "Iced Matcha Latte", ja: "アイス抹茶ラテ" },
    description: {
      en: "Premium Uji matcha with oat milk, lightly sweetened over ice",
      ja: "宇治抹茶とオーツミルク、ほんのり甘くアイスで",
    },
    taxIncludedPrice: 660,
    taxExcludedPrice: 600,
    featured: true,
    available: true,
    soldOutToday: false,
    displayOrder: 0,
  },
  {
    _id: "menuItem-berry-smoothie",
    categoryRef: categoryIds.drinks,
    name: { en: "Berry Blast Smoothie", ja: "ベリーブラストスムージー" },
    description: {
      en: "Strawberries, blueberries, banana and Greek yogurt blended smooth",
      ja: "ストロベリー、ブルーベリー、バナナ、ギリシャヨーグルトのスムージー",
    },
    taxIncludedPrice: 880,
    taxExcludedPrice: 800,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 1,
  },
  {
    _id: "menuItem-mint-lemonade",
    categoryRef: categoryIds.drinks,
    name: { en: "Fresh Mint Lemonade", ja: "フレッシュミントレモネード" },
    description: {
      en: "House-squeezed lemonade with fresh mint leaves and a hint of honey",
      ja: "自家製レモネードにフレッシュミントとはちみつ",
    },
    taxIncludedPrice: 550,
    taxExcludedPrice: 500,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 2,
  },
  {
    _id: "menuItem-hojicha-latte",
    categoryRef: categoryIds.drinks,
    name: { en: "Hojicha Latte", ja: "ほうじ茶ラテ" },
    description: {
      en: "Roasted green tea with steamed milk and kuromitsu syrup",
      ja: "香ばしいほうじ茶とスチームミルク、黒蜜シロップ",
    },
    taxIncludedPrice: 638,
    taxExcludedPrice: 580,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 3,
  },
  {
    _id: "menuItem-cold-brew-coffee",
    categoryRef: categoryIds.drinks,
    name: { en: "Cold Brew Coffee", ja: "水出しコーヒー" },
    description: {
      en: "Slow-steeped single-origin coffee served over ice",
      ja: "シングルオリジンを低温で長時間抽出したアイスコーヒー",
    },
    taxIncludedPrice: 572,
    taxExcludedPrice: 520,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 4,
  },
  // Desserts (3)
  {
    _id: "menuItem-souffle-pancakes",
    categoryRef: categoryIds.desserts,
    name: { en: "Fluffy Soufflé Pancakes", ja: "ふわふわスフレパンケーキ" },
    description: {
      en: "Japanese-style fluffy pancakes with fresh berries, cream and maple syrup",
      ja: "日本式ふわふわパンケーキ、フレッシュベリー、クリーム、メープルシロップ添え",
    },
    taxIncludedPrice: 1540,
    taxExcludedPrice: 1400,
    featured: true,
    available: true,
    soldOutToday: false,
    displayOrder: 0,
  },
  {
    _id: "menuItem-matcha-cheesecake",
    categoryRef: categoryIds.desserts,
    name: { en: "Matcha Cheesecake", ja: "抹茶チーズケーキ" },
    description: {
      en: "Creamy Japanese-style cheesecake with matcha and white chocolate",
      ja: "クリーミーな和風チーズケーキ、抹茶とホワイトチョコレート",
    },
    taxIncludedPrice: 990,
    taxExcludedPrice: 900,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 1,
  },
  {
    _id: "menuItem-classic-tiramisu",
    categoryRef: categoryIds.desserts,
    name: { en: "Classic Tiramisu", ja: "クラシックティラミス" },
    description: {
      en: "Layered espresso-soaked ladyfingers with mascarpone cream",
      ja: "エスプレッソに浸したレディフィンガーとマスカルポーネクリームの層",
    },
    taxIncludedPrice: 880,
    taxExcludedPrice: 800,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 2,
  },
  // Seasonal (3)
  {
    _id: "menuItem-sakura-mochi-set",
    categoryRef: categoryIds.seasonal,
    name: { en: "Sakura Mochi Set", ja: "桜餅セット" },
    description: {
      en: "Spring cherry blossom mochi with sakura tea, limited time only",
      ja: "春の桜餅と桜茶のセット、期間限定",
    },
    taxIncludedPrice: 1100,
    taxExcludedPrice: 1000,
    featured: true,
    available: true,
    soldOutToday: false,
    displayOrder: 0,
  },
  {
    _id: "menuItem-yuzu-citrus-soda",
    categoryRef: categoryIds.seasonal,
    name: { en: "Yuzu Citrus Soda", ja: "柚子シトラスソーダ" },
    description: {
      en: "Refreshing sparkling drink with fresh yuzu juice and honey",
      ja: "フレッシュ柚子ジュースとはちみつのスパークリングドリンク",
    },
    taxIncludedPrice: 660,
    taxExcludedPrice: 600,
    featured: false,
    available: true,
    soldOutToday: false,
    displayOrder: 1,
  },
  {
    _id: "menuItem-takenoko-gohan",
    categoryRef: categoryIds.seasonal,
    name: { en: "Bamboo Shoot Rice Bowl", ja: "たけのこご飯" },
    description: {
      en: "Seasonal bamboo shoots on rice with wakame soup and pickles",
      ja: "旬のたけのこをのせたご飯、わかめ汁とお新香付き",
    },
    taxIncludedPrice: 1320,
    taxExcludedPrice: 1200,
    featured: false,
    available: true,
    soldOutToday: true,
    displayOrder: 2,
  },
];
