export type Language = "en" | "jp";

export const translations = {
  en: {
    nav: {
      menu: "Menu",
      about: "About",
      contact: "Contact",
      reserve: "Reserve",
    },
    hero: {
      title: "Sakura",
      subtitle: "Japanese Cuisine",
      tagline: "An authentic culinary journey through Japan",
      cta: "View Menu",
    },
    menu: {
      title: "Our Menu",
      subtitle: "Crafted with tradition, served with passion",
    },
    categories: {
      starters: "Starters",
      sushi: "Sushi & Sashimi",
      mains: "Main Courses",
      desserts: "Desserts",
    },
    footer: {
      hours: "Hours",
      hoursDetails: "Tue - Sun: 5:30 PM - 10:30 PM",
      closed: "Closed Mondays",
      location: "Location",
      address: "123 Cherry Blossom Lane",
      city: "Tokyo District, NY 10001",
      contact: "Contact",
      phone: "+1 (212) 555-0123",
      email: "hello@sakura-restaurant.com",
      tagline: "Experience the art of Japanese cuisine",
      rights: "All rights reserved",
    },
  },
  jp: {
    nav: {
      menu: "メニュー",
      about: "私たちについて",
      contact: "お問い合わせ",
      reserve: "予約",
    },
    hero: {
      title: "桜",
      subtitle: "日本料理",
      tagline: "日本を巡る本格的な料理の旅",
      cta: "メニューを見る",
    },
    menu: {
      title: "メニュー",
      subtitle: "伝統を込めて、情熱を持ってお届けします",
    },
    categories: {
      starters: "前菜",
      sushi: "寿司・刺身",
      mains: "メインディッシュ",
      desserts: "デザート",
    },
    footer: {
      hours: "営業時間",
      hoursDetails: "火〜日: 17:30 - 22:30",
      closed: "月曜定休",
      location: "所在地",
      address: "桜通り123番地",
      city: "東京区、ニューヨーク 10001",
      contact: "お問い合わせ",
      phone: "+1 (212) 555-0123",
      email: "hello@sakura-restaurant.com",
      tagline: "日本料理の芸術を体験してください",
      rights: "無断転載禁止",
    },
  },
};

export type MenuItem = {
  id: string;
  name: { en: string; jp: string };
  description: { en: string; jp: string };
  price: number;
  image: string;
  category: "starters" | "sushi" | "mains" | "desserts";
};

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "1",
    name: { en: "Edamame", jp: "枝豆" },
    description: {
      en: "Steamed young soybeans with sea salt",
      jp: "海塩で蒸した若い枝豆",
    },
    price: 8,
    image: "/images/edamame.png",
    category: "starters",
  },
  {
    id: "2",
    name: { en: "Miso Soup", jp: "味噌汁" },
    description: {
      en: "Traditional soup with tofu, wakame, and green onions",
      jp: "豆腐、わかめ、ねぎの伝統的なスープ",
    },
    price: 6,
    image: "/images/miso-soup.png",
    category: "starters",
  },
  {
    id: "3",
    name: { en: "Tempura", jp: "天ぷら" },
    description: {
      en: "Crispy battered shrimp and seasonal vegetables",
      jp: "海老と季節の野菜のサクサク天ぷら",
    },
    price: 18,
    image: "/images/tempura.png",
    category: "starters",
  },
  // Sushi & Sashimi
  {
    id: "4",
    name: { en: "Chef's Sushi Platter", jp: "おまかせ寿司盛り合わせ" },
    description: {
      en: "12 pieces of seasonal nigiri selected by our chef",
      jp: "シェフが選ぶ季節のにぎり12貫",
    },
    price: 48,
    image: "/images/sushi-platter.png",
    category: "sushi",
  },
  {
    id: "5",
    name: { en: "Salmon Sashimi", jp: "サーモン刺身" },
    description: {
      en: "Fresh Atlantic salmon, thinly sliced with shiso",
      jp: "新鮮な大西洋サーモンを薄切りにし、しそを添えて",
    },
    price: 24,
    image: "/images/sashimi.png",
    category: "sushi",
  },
  // Mains
  {
    id: "6",
    name: { en: "Tonkotsu Ramen", jp: "豚骨ラーメン" },
    description: {
      en: "Rich pork bone broth with chashu, soft egg, and nori",
      jp: "チャーシュー、半熟卵、海苔入りの濃厚豚骨スープ",
    },
    price: 22,
    image: "/images/ramen.png",
    category: "mains",
  },
  {
    id: "7",
    name: { en: "A5 Wagyu Beef", jp: "A5和牛" },
    description: {
      en: "Premium Japanese wagyu, grilled tableside",
      jp: "最高級の日本産和牛、テーブルで焼き上げます",
    },
    price: 95,
    image: "/images/wagyu.png",
    category: "mains",
  },
  // Desserts
  {
    id: "8",
    name: { en: "Matcha Cheesecake", jp: "抹茶チーズケーキ" },
    description: {
      en: "Creamy green tea cheesecake with white chocolate",
      jp: "クリーミーな抹茶チーズケーキ、ホワイトチョコレート添え",
    },
    price: 14,
    image: "/images/matcha-dessert.png",
    category: "desserts",
  },
  {
    id: "9",
    name: { en: "Dorayaki", jp: "どら焼き" },
    description: {
      en: "Sweet red bean pancakes with matcha ice cream",
      jp: "あんこ入りパンケーキ、抹茶アイス添え",
    },
    price: 12,
    image: "/images/dorayaki.png",
    category: "desserts",
  },
];
