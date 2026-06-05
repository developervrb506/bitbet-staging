import Image from "next/image";
import React from "react";
import CasinoCollage from "./CasinoCollage";

export default function PlayForFunInfoSections() {
  return (
    <section className="relative w-full py-10 md:py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-32">
        {/* Top Header and Cards */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-[46px] font-bold font-sora text-white mb-12 md:mb-16 text-center tracking-wide">
            Play For Fun - Crypto Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
            {/* Card 1 */}
            <div className="flex flex-col bg-[linear-gradient(180deg,rgba(235,99,49,0.1)_39.02%,rgba(235,99,49,0)_100%)] rounded-[30px] p-8 lg:p-10 border border-white/5 shadow-2xl">
              <div className="w-full h-[250px] relative mb-8">
                <Image
                  src="/playforfunone.png"
                  alt="Play for Fun at BitBet Online Casino"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold font-sora text-white mb-7 leading-tight max-w-[290px]">
                Play for Fun at BitBet Online Casino
              </h3>
              <p className="text-white/80 font-sora text-base leading-relaxed">
                Welcome to the captivating world of online casino gaming, where
                excitement, entertainment, and potential rewards await at every
                turn. In this digital era, playing casino games has become more
                convenient than ever, thanks to platforms like BitBet Online
                Casino. If you&apos;re seeking a thrilling experience filled
                with endless fun and the chance to win big, you&apos;ve come to
                the right place.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-[linear-gradient(180deg,rgba(235,99,49,0.1)_39.02%,rgba(235,99,49,0)_100%)] rounded-[30px] p-8 lg:p-10 border border-white/5 shadow-2xl">
              <div className="w-full h-[250px] relative mb-8">
                <Image
                  src="/playforfuntwo.png"
                  alt="The Thrill of Online Casino Games"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold font-sora text-white mb-7 leading-tight max-w-[290px]">
                The Thrill of Online Casino Games
              </h3>
              <p className="text-white/80 font-sora text-base leading-relaxed">
                Step into the exhilarating world of online casino games, where
                the excitement never fades and fortunes can be won with a single
                spin or hand. The virtual realm of gambling offers an immersive
                experience that transports players to endless possibilities.
                From your home, you can embark on thrilling adventures and
                engage in games that captivate your senses.
              </p>
            </div>
          </div>
        </div>

        {/* Grouped Sections: Embracing & Journey (Images Collide) */}
        <div className="flex flex-col w-full">
          {/* Section: Embracing Cryptocurrency */}
          <div className="flex flex-col lg:flex-row items-center w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white/70 font-sora text-sm md:text-base leading-relaxed pl-0 xl:pl-16  md:pr-0 lg:pr-16 relative pb-10 xl:pb-0">
              <div className="hidden md:block absolute right-0 top-1/2 w-12 lg:w-16 h-px bg-white/20"></div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora leading-8 text-white mb-2 max-w-full lg:max-w-[460px]">
                Embracing Cryptocurrency in the Gaming World
              </h2>
              <p>
                In today&apos;s digital age, the gaming world is undergoing a
                profound transformation, propelled by the advent of
                cryptocurrencies. As players seek more secure, transparent, and
                efficient methods of transactions within online casinos,
                cryptocurrencies have emerged as a game-changer.
              </p>
              <p>
                BitBet Online Casino is at the forefront of this revolution,
                embracing cryptocurrency to provide an unparalleled gaming
                experience. By accepting popular cryptocurrencies like Bitcoin,
                Ethereum, and Litecoin as payment options, BitBet offers players
                a seamless and fast way to fund their accounts. The
                decentralized nature of these digital currencies ensures that
                transactions are secure and free from third-party interference.
              </p>
            </div>
            <div className="w-full lg:w-1/2  overflow-hidden shadow-xl relative">
              <Image
                src="/cryptocurrency.png"
                alt="Embracing Cryptocurrency in the Gaming World"
                fill
                className="relative!"
              />
            </div>
          </div>

          {/* Section: Journey into the World of Crypto Games */}
          <div className="flex flex-col lg:flex-row-reverse items-center w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white/70 font-sora text-sm md:text-base leading-relaxed pl-0 lg:pl-16 relative py-10 lg:py-0">
              <div className="hidden md:block absolute left-0 top-1/2 w-12 lg:w-16 h-px bg-white/20"></div>
              <h2 className="text-2xl md:text-3xl font-bold font-sora leading-8 text-white mb-2 max-w-full lg:max-w-[435px]">
                Journey into the World of Crypto Games
              </h2>
              <p>
                Embarking on a journey into crypto games is akin to stepping
                into a mesmerizing realm where traditional online casino games
                intertwine with cutting-edge technology. With each click and
                spin, players are transported to a digital wonderland where
                cryptocurrencies reign supreme. Imagine the thrill of playing
                your favorite casino games while also exploring the vast
                possibilities offered by blockchain technology.
              </p>
            </div>
            <div className="w-full lg:w-1/2  overflow-hidden shadow-xl relative">
              <Image
                src="/cryptogames.png"
                alt="Journey into the World of Crypto Games"
                fill
                className="relative!"
              />
            </div>
          </div>
        </div>

        {/* Section: Unleashing the Excitement of Online American Roulette */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 w-full pt-0 lg:pt-16">
          <div className="flex-1 flex flex-col gap-6 text-white/70 font-sora text-sm md:text-base leading-relaxed pr-0 lg:pr-10 relative z-40">
            <h2 className="text-2xl md:text-4xl font-bold font-sora leading-snug text-white mb-2 max-w-[479px]">
              Unleashing the Excitement of Online American Roulette
            </h2>
            <p className="text-white/80">
              Prepare to be captivated by the timeless allure of Online American
              Roulette, as this classic casino game takes on new life in the
              realm of online gaming. With its elegant design and thrilling
              gameplay, online American Roulette provides an immersive
              experience that will keep you on the edge of your seat.
            </p>
            <p className="text-white/80">
              Step into a virtual casino environment where the roulette wheel
              spins with anticipation, each click building suspense as the ball
              dances between red and black pockets. Place your bets
              strategically, selecting numbers, colors, or even combinations,
              and let the wheel determine your fate. Whether you&apos;re an
              experienced player or new to roulette, online American Roulette
              offers endless possibilities for exhilarating wins and
              heart-pounding moments.
            </p>
          </div>
          <CasinoCollage />
        </div>

        {/* Section: A Beginner's Guide to Online Baccarat */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 w-full pt-10 md:pt-36">
          <div className="flex-1 flex flex-col gap-6 text-white/70 font-sora text-sm md:text-base leading-relaxed pl-0 lg:pl-10 relative z-40">
            <h2 className="text-2xl md:text-4xl font-bold font-sora leading-snug text-white mb-2 max-w-full lg:max-w-[356px]">
              A Beginner&apos;s Guide to Online Baccarat
            </h2>
            <p className="text-white/80">
              Prepare to immerse yourself in the world of elegance and
              sophistication as we delve into the captivating game of online
              Baccarat. Renowned for its association with high rollers and
              glamorous casinos, Baccarat is a card game that combines luck and
              strategy in equal measure.
            </p>
            <p className="text-white/80">
              The world of online casino gaming at BitBet is a thrilling and
              rewarding experience. From the exhilarating American Roulette to
              the strategic game of Baccarat, players have an array of options
              to immerse themselves in. By choosing a trusted and reliable
              online casino platform, players can indulge in their favorite
              games with peace of mind. Moreover, embracing cryptocurrency
              further enhances the excitement and potential for limitless
              possibilities in the gaming world. So, why wait? Dive into BitBet
              Online Casino today and let the adventure begin!
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/gambling.png"
                alt="Beginner's Guide to Online Baccarat"
                fill
                className="relative!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
