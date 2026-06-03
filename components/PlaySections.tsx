"use client";

import Image from "next/image";

interface GameCard {
  id: number;
  name: string;
  image: string;
}

const playForFunGames: GameCard[] = [
  { id: 1, name: "Blackjack Single Hand", image: "/single.png" },
  { id: 2, name: "Spanish Blackjack", image: "/blackjack.png" },
  { id: 3, name: "Blackjack Double Exposure", image: "/double.png" },
  { id: 4, name: "American Roulette", image: "/american.png" },
  { id: 5, name: "Craps", image: "/craps.png" },
  { id: 6, name: "Baccarat", image: "/baccarat.png" },
  { id: 7, name: "Classic Fruits Slot", image: "/fruit.png" },
  { id: 8, name: "Jewels of Egypt Slot", image: "/egypt.png" },
  { id: 9, name: "Pirates Cove Slot", image: "/pirates.png" },
  { id: 10, name: "Creepy Sweets Slot", image: "/creepy.png" },
  { id: 11, name: "Crypto Land", image: "/crypto.png" },
  { id: 12, name: "Golden Dragon", image: "/golden.png" },
];

const timeToPlayImages = [
  { id: "playone", src: "/playone.png", alt: "Table Game Playing One" },
  { id: "playtwo", src: "/playtwo.png", alt: "Table Game Playing Two" },
  { id: "playthree", src: "/playthree.png", alt: "Table Game Playing Three" },
];
/* Rectangle 2 */
export default function PlaySections() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className=" mb-20">
          <h2 className="text-[46px] font-bold text-white mb-7 text-center font-sora tracking-wide">
            Play For Fun
          </h2>

          {/* Game Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full ">
            {playForFunGames.map((game) => (
              <div
                key={game.id}
                className="group relative flex flex-col items-center rounded-2xl p-2.5 backdrop-blur-[22.6px] duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  background: `
                    radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)`,
                  backdropFilter: "blur(11.2993px)",
                }}
              >
                <div className="relative w-full aspect-square rounded-[16px] overflow-hidden transition-all duration-300">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                </div>

                {/* Game Title */}
                <h3 className="my-7 text-center font-bold text-white text-[20px]font-semibold font-sora leading-tight tracking-wide px-2 min-h-[36px] flex items-center justify-center">
                  {game.name}
                </h3>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            {" "}
            <button className="text-white bg-linear-to-b from-[#F39120] to-[#EB6331] rounded-[12px] py-3.5 px-7 font-montserrat font-bold ">
              View More
            </button>
          </div>
        </div>

        <div className="w-full  mt-8 border-l border-white pl-6 md:pl-10">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-[46px] font-bold text-white font-sora tracking-wide">
              It&apos;s Time to Play
            </h2>
          </div>

          {/* Three Column Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {timeToPlayImages.map((item) => (
              <div
                key={item.id}
                className="group relative w-full aspect-3/4 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                {/* Full-width Cover Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
