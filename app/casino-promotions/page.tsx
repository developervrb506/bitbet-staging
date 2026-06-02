import Hero from "@/components/Hero";
import CasinoPromotionsSections from "@/components/CasinoPromotionsSections";

export default function CasinoPromotionsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero
        title="Play For Fun"
        backgroundImage="/machine.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris sit amet nisl interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
      />
      <CasinoPromotionsSections />
    </main>
  );
}
