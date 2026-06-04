import Image from "next/image";

export default function CasinoCollage() {
  return (
    <div className="flex-1 relative w-full aspect-4/5 sm:aspect-square md:aspect-auto md:h-[600px]">
      {/* Dealer Image (Top Right) */}
      <div className="absolute top-0 right-0 w-[90%] md:w-full h-[60%] sm:h-[65%] md:h-[400px] overflow-hidden z-20">
        <Image
          src="/pokerman.png"
          alt="Casino Dealer"
          fill
          className="object-contain object-top-right md:object-center max-h-[400px]"
        />
      </div>

      {/* Slot Machine (Middle Left) */}
      <div className="absolute top-[45%] sm:top-[50%] md:top-[60%] left-0 w-[45%] sm:w-[40%] md:w-[50%] aspect-306/388 overflow-hidden shadow-2xl z-10">
        <Image
          src="/game.png"
          alt="Slot Machine"
          fill
          className="object-cover"
        />
      </div>

      {/* Chips and Table (Bottom Right) */}
      <div className="absolute bottom-[-5%] sm:bottom-[-15%] md:bottom-[-25%] lg:bottom-[-40%] right-[-5%] sm:right-[-10%] md:right-[-25%] lg:right-[-35%] xl:right-[-45%] w-[50%] md:w-[70%] lg:w-[85%] aspect-3/2 overflow-hidden shadow-2xl z-30">
        <Image
          src="/casino.png"
          alt="Casino Chips"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
