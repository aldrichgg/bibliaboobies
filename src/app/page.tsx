import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Challenges } from "@/components/landing/Challenges";
import { ProductSection } from "@/components/landing/ProductSection";
import { Audience } from "@/components/landing/Audience";
import { Testimonials } from "@/components/landing/Testimonials";
import { Bonus } from "@/components/landing/Bonus";
import { Pricing } from "@/components/landing/Pricing";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <ProductSection />
        <Audience />
        <Testimonials />
        <Bonus />
        <Pricing />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
