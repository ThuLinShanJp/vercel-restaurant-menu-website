import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Sakura | Japanese Cuisine",
  description:
    "Experience authentic Japanese cuisine at Sakura. From fresh sushi and sashimi to traditional ramen and wagyu beef, discover the art of Japanese cooking.",
  keywords: [
    "Japanese restaurant",
    "sushi",
    "ramen",
    "Japanese cuisine",
    "omakase",
    "wagyu",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body
        className={`${geist.variable} ${notoSerifJP.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
