import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PlayerFocusedBanner from "@/components/home/PlayerFocusedBanner";
import FeaturesSection from "@/components/home/FeaturesSection";
import BettingTypesSection from "@/components/home/BettingTypesSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PlayerFocusedBanner />
      <FeaturesSection />
      <BettingTypesSection />
      {/* <PromotionsSection /> */}
      <WhyUsSection />
      {/* <CtaSection /> */}
    </>
  );
}
