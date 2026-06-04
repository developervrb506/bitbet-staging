import Image from "next/image";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/about.png"
            alt="About BitBet"
            fill
            className="object-right object-cover lg:object-center"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-sora max-w-[505px]">
              About BITBET, The Best Online Casino
            </h1>
            <p className="text-gray-300 text-sm md:text-lg mb-7 max-w-lg leading-relaxed font-sora">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
              mauris sit amet nisl interdum vestibulum iaculis mattis arcu. Cras
              imperdiet ipsum at metus varius
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}
