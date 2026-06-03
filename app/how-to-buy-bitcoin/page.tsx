import Hero from "@/components/Hero";
import HowToBuyBitcoinSections from "@/components/HowToBuyBitcoinSections";

export default function HowToBuyBitcoinPage() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero
          backgroundImage="/machine.png"
          title="How to Buy Bitcoin?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisi interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
        />
        <HowToBuyBitcoinSections />
      </div>
    </main>
  );
}
