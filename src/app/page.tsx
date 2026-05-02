import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QnASection } from "@/components/QnASection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-rift/30">
      <Header />
      <main className="flex-1">
        <Hero />
        <QnASection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
