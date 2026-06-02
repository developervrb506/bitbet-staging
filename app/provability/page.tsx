import Hero from "@/components/Hero";
import ProvabilitySections from "@/components/ProvabilitySections";

export default function ProvabilityPage() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero
          backgroundImage="/bonushero.png"
          title="Provability"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisi interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
        />
        <ProvabilitySections />
      </div>
    </main>
  );
}
