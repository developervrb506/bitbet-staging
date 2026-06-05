import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero
        backgroundImage="/about.png"
        title="About BITBET, The Best Online Casino"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisl interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
      />

      <AboutSection />
    </main>
  );
}
