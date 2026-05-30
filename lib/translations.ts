export type Language = "en" | "jp";

export const translations = {
  en: {
    header: {
      name: "Leaf & Bean",
    },
    categories: {
      food: "Food",
      drinks: "Drinks",
      desserts: "Desserts",
    },
  },
  jp: {
    header: {
      name: "リーフ＆ビーン",
    },
    categories: {
      food: "フード",
      drinks: "ドリンク",
      desserts: "デザート",
    },
  },
};

export type MenuItem = {
  id: string;
  name: { en: string; jp: string };
  description: { en: string; jp: string };
  price: number;
  image: string;
  category: "food" | "drinks" | "desserts";
};

export const menuItems: MenuItem[] = [
  // Food
  {
    id: "1",
    name: { en: "Avocado Toast", jp: "アボカドトースト" },
    description: {
      en: "Smashed avocado on sourdough with poached egg, cherry tomatoes & microgreens",
      jp: "サワードウにスマッシュアボカド、ポーチドエッグ、チェリートマト、マイクログリーン添え",
    },
    price: 14,
    image: "/images/avocado-toast.png",
    category: "food",
  },
  {
    id: "2",
    name: { en: "Teriyaki Chicken Bowl", jp: "照り焼きチキンボウル" },
    description: {
      en: "Grilled chicken with rice, edamame, avocado, pickled vegetables & sesame",
      jp: "グリルチキンとライス、枝豆、アボカド、ピクルス野菜、ごま添え",
    },
    price: 16,
    image: "/images/chicken-bowl.png",
    category: "food",
  },
  {
    id: "3",
    name: { en: "Salmon Poke Salad", jp: "サーモンポケサラダ" },
    description: {
      en: "Fresh salmon with mixed greens, cucumber, edamame & citrus ponzu dressing",
      jp: "新鮮なサーモンとミックスグリーン、キュウリ、枝豆、柑橘ポン酢ドレッシング",
    },
    price: 18,
    image: "/images/salmon-salad.png",
    category: "food",
  },
  {
    id: "4",
    name: { en: "Crispy Tempura", jp: "サクサク天ぷら" },
    description: {
      en: "Assorted shrimp & vegetable tempura with house-made dipping sauce",
      jp: "エビと野菜の盛り合わせ天ぷら、自家製つけダレ付き",
    },
    price: 15,
    image: "/images/tempura.png",
    category: "food",
  },
  {
    id: "5",
    name: { en: "Tonkotsu Ramen", jp: "豚骨ラーメン" },
    description: {
      en: "Rich pork broth with chashu, soft-boiled egg, nori & green onions",
      jp: "濃厚豚骨スープにチャーシュー、半熟卵、海苔、ネギ",
    },
    price: 17,
    image: "/images/ramen.png",
    category: "food",
  },
  // Drinks
  {
    id: "6",
    name: { en: "Iced Matcha Latte", jp: "アイス抹茶ラテ" },
    description: {
      en: "Premium matcha with oat milk, lightly sweetened over ice",
      jp: "プレミアム抹茶とオーツミルク、ほんのり甘くアイスで",
    },
    price: 6,
    image: "/images/iced-matcha.png",
    category: "drinks",
  },
  {
    id: "7",
    name: { en: "Berry Blast Smoothie", jp: "ベリーブラストスムージー" },
    description: {
      en: "Strawberries, blueberries, banana & Greek yogurt blended smooth",
      jp: "ストロベリー、ブルーベリー、バナナ、ギリシャヨーグルトのスムージー",
    },
    price: 8,
    image: "/images/fruit-smoothie.png",
    category: "drinks",
  },
  {
    id: "8",
    name: { en: "Fresh Mint Lemonade", jp: "フレッシュミントレモネード" },
    description: {
      en: "House-squeezed lemonade with fresh mint leaves & a hint of honey",
      jp: "自家製レモネードにフレッシュミントとはちみつ",
    },
    price: 5,
    image: "/images/lemonade.png",
    category: "drinks",
  },
  // Desserts
  {
    id: "9",
    name: { en: "Fluffy Soufflé Pancakes", jp: "ふわふわスフレパンケーキ" },
    description: {
      en: "Japanese-style fluffy pancakes with fresh berries, cream & maple syrup",
      jp: "日本式ふわふわパンケーキ、フレッシュベリー、クリーム、メープルシロップ添え",
    },
    price: 14,
    image: "/images/pancakes.png",
    category: "desserts",
  },
  {
    id: "10",
    name: { en: "Matcha Cheesecake", jp: "抹茶チーズケーキ" },
    description: {
      en: "Creamy Japanese-style cheesecake with matcha & white chocolate",
      jp: "クリーミーな和風チーズケーキ、抹茶とホワイトチョコレート",
    },
    price: 9,
    image: "/images/matcha-dessert.png",
    category: "desserts",
  },
  {
    id: "11",
    name: { en: "Classic Tiramisu", jp: "クラシックティラミス" },
    description: {
      en: "Layered espresso-soaked ladyfingers with mascarpone cream",
      jp: "エスプレッソに浸したレディフィンガーとマスカルポーネクリームの層",
    },
    price: 8,
    image: "/images/tiramisu.png",
    category: "desserts",
  },
  {
    id: "12",
    name: { en: "Dorayaki", jp: "どら焼き" },
    description: {
      en: "Traditional sweet red bean pancakes served with matcha ice cream",
      jp: "伝統的なあんこパンケーキ、抹茶アイス添え",
    },
    price: 7,
    image: "/images/dorayaki.png",
    category: "desserts",
  },
];
