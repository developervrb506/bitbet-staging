import DecorativeEllipse from "@/components/DecorativeEllipse";
import Hero from "@/components/Hero";
import PlayForFunInfoSections from "@/components/PlayForFunInfoSections";
export default function PlayForFunPage() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero
          backgroundImage="/cryptos.png"
          title="Play For Fun"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisi interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
        />
        <div className="relative w-full bg-black text-white">
          <DecorativeEllipse left="-247px" top="10%" />
          <PlayForFunInfoSections />
        </div>
      </div>
    </main>
  );
}
