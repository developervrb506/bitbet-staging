import Hero from "@/components/Hero";
import BonusSections from "@/components/BonusSections";

export default function BonusPage() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero
          backgroundImage="/bonushero.png"
          title={
            <>
              Get a <span className="text-[#EB6331]">200%</span> Betting Bonus
              up to <span className="text-[#EB6331]">$1,000</span>
            </>
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisi interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
        />
        <BonusSections />
      </div>
    </main>
  );
}
