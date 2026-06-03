import Image from "next/image";

export default function CasinoCollage() {
  return (
    <div className="flex-1 relative w-full h-[600px] ">
      {/* Dealer Image (Top Right) */}
      <div className="absolute top-0 right-0 w-full h-[400px]  overflow-hidden z-20">
        <Image
          src="/pokerman.png"
          alt="Casino Dealer"
          fill
          className="object-contain max-h-[400px] "
        />
      </div>

      {/* Slot Machine (Middle Left) */}
      <div className="absolute top-[60%] left-[0%] w-[50%] aspect-306/388  overflow-hidden shadow-2xl z-10">
        <Image
          src="/game.png"
          alt="Slot Machine"
          fill
          className="object-cover"
        />
      </div>

      {/* Chips and Table (Bottom Right) */}
      <div className="absolute bottom-[-40%] right-[-15%] md:right-[-25%] lg:right-[-35%] xl:right-[-45%] w-[75%] md:w-[85%] aspect-3/2  overflow-hidden shadow-2xl z-30">
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
