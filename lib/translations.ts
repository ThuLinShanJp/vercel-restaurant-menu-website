import type { Locale } from "@/lib/locale";

/** @deprecated Use `Locale` from `@/lib/locale` */
export type Language = Locale;

export const translations = {
  en: {
    header: {
      name: "Leaf & Bean",
    },
    categories: {
      food: "Food",
      drinks: "Drinks",
      desserts: "Desserts",
      seasonal: "Seasonal",
    },
    featured: {
      title: "Featured",
      viewAll: "View All",
    },
    menu: {
      soldOut: "Sold out today",
      search: "Search menu...",
      sort: {
        default: "Default",
        priceAsc: "Price: Low to High",
        priceDesc: "Price: High to Low",
        name: "Name A-Z",
      },
      noItems: "No items found",
      taxIncluded: "Tax included",
      taxExcluded: "excl. tax",
    },
    banners: {
      summer: {
        title: "Summer Refresh",
        subtitle: "Cool drinks & fresh salads",
      },
      matcha: {
        title: "Matcha Collection",
        subtitle: "Premium Japanese green tea",
      },
      brunch: {
        title: "Weekend Brunch",
        subtitle: "Sat & Sun 10AM - 2PM",
      },
    },
  },
  ja: {
    header: {
      name: "リーフ＆ビーン",
    },
    categories: {
      food: "フード",
      drinks: "ドリンク",
      desserts: "デザート",
      seasonal: "季節限定",
    },
    featured: {
      title: "おすすめ",
      viewAll: "すべて見る",
    },
    menu: {
      soldOut: "本日売り切れ",
      search: "メニューを検索...",
      sort: {
        default: "デフォルト",
        priceAsc: "価格: 安い順",
        priceDesc: "価格: 高い順",
        name: "名前順",
      },
      noItems: "アイテムが見つかりません",
      taxIncluded: "税込",
      taxExcluded: "税抜",
    },
    banners: {
      summer: {
        title: "夏のリフレッシュ",
        subtitle: "冷たいドリンクとフレッシュサラダ",
      },
      matcha: {
        title: "抹茶コレクション",
        subtitle: "プレミアム日本茶",
      },
      brunch: {
        title: "週末ブランチ",
        subtitle: "土日 10時〜14時",
      },
    },
  },
};

export type MenuItem = {
  id: string;
  name: { en: string; ja: string };
  description: { en: string; ja: string };
  price: number;
  priceExcludingTax?: number;
  image: string;
  category: "food" | "drinks" | "desserts" | "seasonal";
  featured?: boolean;
};

export const menuItems: MenuItem[] = [
  // Food
  {
    id: "1",
    name: { en: "Avocado Toast", ja: "アボカドトースト" },
    description: {
      en: "Smashed avocado on sourdough with poached egg, cherry tomatoes & microgreens",
      ja: "サワードウにアボカド、ポーチドエッグ、チェリートマト、マイクログリーン添え",
    },
    price: 1540,
    priceExcludingTax: 1400,
    image: "/images/avocado-toast.png",
    category: "food",
    featured: true,
  },
  {
    id: "2",
    name: { en: "Teriyaki Chicken Bowl", ja: "照り焼きチキンボウル" },
    description: {
      en: "Grilled chicken with rice, edamame, avocado, pickled vegetables & sesame",
      ja: "グリルチキンとライス、枝豆、アボカド、ピクルス野菜、ごま添え",
    },
    price: 1760,
    priceExcludingTax: 1600,
    image: "/images/chicken-bowl.png",
    category: "food",
  },
  {
    id: "3",
    name: { en: "Salmon Poke Salad", ja: "サーモンポケサラダ" },
    description: {
      en: "Fresh salmon with mixed greens, cucumber, edamame & citrus ponzu dressing",
      ja: "新鮮なサーモンとミックスグリーン、キュウリ、枝豆、柑橘ポン酢ドレッシング",
    },
    price: 1980,
    priceExcludingTax: 1800,
    image: "/images/salmon-salad.png",
    category: "food",
    featured: true,
  },
  {
    id: "4",
    name: { en: "Crispy Tempura", ja: "サクサク天ぷら" },
    description: {
      en: "Assorted shrimp & vegetable tempura with house-made dipping sauce",
      ja: "エビと野菜の盛り合わせ天ぷら、自家製つけダレ付き",
    },
    price: 1650,
    priceExcludingTax: 1500,
    image: "/images/tempura.png",
    category: "food",
  },
  {
    id: "5",
    name: { en: "Tonkotsu Ramen", ja: "豚骨ラーメン" },
    description: {
      en: "Rich pork broth with chashu, soft-boiled egg, nori & green onions",
      ja: "濃厚豚骨スープにチャーシュー、半熟卵、海苔、ネギ",
    },
    price: 1870,
    priceExcludingTax: 1700,
    image: "/images/ramen.png",
    category: "food",
  },
  // Drinks
  {
    id: "6",
    name: { en: "Iced Matcha Latte", ja: "アイス抹茶ラテ" },
    description: {
      en: "Premium matcha with oat milk, lightly sweetened over ice",
      ja: "プレミアム抹茶とオーツミルク、ほんのり甘くアイスで",
    },
    price: 660,
    priceExcludingTax: 600,
    image: "/images/iced-matcha.png",
    category: "drinks",
    featured: true,
  },
  {
    id: "7",
    name: { en: "Berry Blast Smoothie", ja: "ベリーブラストスムージー" },
    description: {
      en: "Strawberries, blueberries, banana & Greek yogurt blended smooth",
      ja: "ストロベリー、ブルーベリー、バナナ、ギリシャヨーグルトのスムージー",
    },
    price: 880,
    priceExcludingTax: 800,
    image: "/images/fruit-smoothie.png",
    category: "drinks",
  },
  {
    id: "8",
    name: { en: "Fresh Mint Lemonade", ja: "フレッシュミントレモネード" },
    description: {
      en: "House-squeezed lemonade with fresh mint leaves & a hint of honey",
      ja: "自家製レモネードにフレッシュミントとはちみつ",
    },
    price: 550,
    priceExcludingTax: 500,
    image: "/images/lemonade.png",
    category: "drinks",
  },
  // Desserts
  {
    id: "9",
    name: { en: "Fluffy Soufflé Pancakes", ja: "ふわふわスフレパンケーキ" },
    description: {
      en: "Japanese-style fluffy pancakes with fresh berries, cream & maple syrup",
      ja: "日本式ふわふわパンケーキ、フレッシュベリー、クリーム、メープルシロップ添え",
    },
    price: 1540,
    priceExcludingTax: 1400,
    image: "/images/pancakes.png",
    category: "desserts",
    featured: true,
  },
  {
    id: "10",
    name: { en: "Matcha Cheesecake", ja: "抹茶チーズケーキ" },
    description: {
      en: "Creamy Japanese-style cheesecake with matcha & white chocolate",
      ja: "クリーミーな和風チーズケーキ、抹茶とホワイトチョコレート",
    },
    price: 990,
    priceExcludingTax: 900,
    image: "/images/matcha-dessert.png",
    category: "desserts",
  },
  {
    id: "11",
    name: { en: "Classic Tiramisu", ja: "クラシックティラミス" },
    description: {
      en: "Layered espresso-soaked ladyfingers with mascarpone cream",
      ja: "エスプレッソに浸したレディフィンガーとマスカルポーネクリームの層",
    },
    price: 880,
    priceExcludingTax: 800,
    image: "/images/tiramisu.png",
    category: "desserts",
  },
  {
    id: "12",
    name: { en: "Dorayaki", ja: "どら焼き" },
    description: {
      en: "Traditional sweet red bean pancakes served with matcha ice cream",
      ja: "伝統的なあんこパンケーキ、抹茶アイス添え",
    },
    price: 770,
    priceExcludingTax: 700,
    image: "/images/dorayaki.png",
    category: "desserts",
  },
  // Seasonal
  {
    id: "13",
    name: { en: "Sakura Mochi Set", ja: "桜餅セット" },
    description: {
      en: "Spring cherry blossom mochi with sakura tea, limited time only",
      ja: "春の桜餅と桜茶のセット、期間限定",
    },
    price: 1100,
    priceExcludingTax: 1000,
    image: "/images/seasonal-sakura.png",
    category: "seasonal",
    featured: true,
  },
  {
    id: "14",
    name: { en: "Yuzu Citrus Soda", ja: "柚子シトラスソーダ" },
    description: {
      en: "Refreshing sparkling drink with fresh yuzu juice and honey",
      ja: "フレッシュ柚子ジュースとはちみつのスパークリングドリンク",
    },
    price: 660,
    priceExcludingTax: 600,
    image: "/images/seasonal-yuzu.png",
    category: "seasonal",
  },
];

export const banners = [
  {
    id: "summer",
    image: "/images/banner-summer.png",
  },
  {
    id: "matcha",
    image: "/images/banner-matcha.png",
  },
  {
    id: "brunch",
    image: "/images/banner-brunch.png",
  },
];
