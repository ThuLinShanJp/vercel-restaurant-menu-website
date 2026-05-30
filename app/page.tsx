import { LanguageProvider } from "@/components/language-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <MenuSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
