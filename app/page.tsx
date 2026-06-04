import Hero from "@/components/Hero";
import PlaySections from "@/components/PlaySections";
import InfoSection from "@/components/InfoSection";

export default function HomePage() {
  return (
    <main className="relative w-full bg-black overflow-hidden">
      {/* Left Blur */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "151.69px",
          height: "883.27px",
          left: "-247px",
          top: "1135px",
          background: "#EB6331",
          filter: "blur(175px)",
          transform: "matrix(-0.77, 0.64, 0.64, 0.77, 0, 0)",
        }}
      />

      {/* Right Blur */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "151.69px",
          height: "883.27px",
          left: "1535px",
          top: "2167px",
          background: "#EB6331",
          filter: "blur(175px)",
          transform: "rotate(39.62deg)",
        }}
      />

      <div className="relative z-10">
        <Hero
          title={<>Lorem ipsum dolor amet consectetur.</>}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisl interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
          buttonText="Join Now"
        />
        <PlaySections />
        <InfoSection />
      </div>
    </main>
  );
}
