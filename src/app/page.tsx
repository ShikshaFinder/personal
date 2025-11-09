import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Ventures } from "./components/Ventures";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <Hero />
      <About />
      <Ventures />
      <Achievements />
      <Skills />
      <Footer />
    </main>
  );
}
