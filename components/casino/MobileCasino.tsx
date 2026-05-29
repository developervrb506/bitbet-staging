import Image from "next/image";

const mobileCasinoCards = [
  {
    image: "/mobileCasino1.png",
    alt: "Online casino game lobby",
  },
  {
    image: "/mobileCasino2.png",
    alt: "Mobile casino games on a phone",
  },
];

export default function MobileCasino() {
  return (
    <section className="bg-black py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_650px]">
            <div className="max-w-[640px]">
              <h2 className="font-antonio text-[42px] font-bold uppercase leading-none text-white sm:text-[56px] lg:text-[64px]">
                Mobile Casino{" "}
                <span className="text-[#EF4424]">Offerings</span>
              </h2>

              <div className="mt-8 space-y-4 font-inter text-sm leading-relaxed text-[#D6D6D6] sm:text-base">
                <p>
                  Play our amazing mobile casino games right from your tablet or
                  smartphone! No matter what platform you wish to play on,
                  you&apos;re guaranteed a streamlined online casino experience.
                  Once you open your account and make your first deposit, getting
                  started is a breeze. Periodically, we offer casino promotions to
                  help your money go further.
                </p>
                <p>
                  Please don&apos;t take our word for it! Get started betting now
                  with our many online casino games to choose from. Whether you
                  want a classic slot machine or a more challenging card game, we
                  have casino games for everyone.
                </p>
              </div>

              <p className="mt-7 font-inter text-lg font-semibold leading-snug text-[#D6D6D6] sm:text-xl">
                1 Account - 2 Casinos - Endless Fun
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
              {mobileCasinoCards.map((card) => (
                <div
                  key={card.image}
                  className="relative aspect-square overflow-hidden rounded-lg  mobileCasinoImg shadow-2xl shadow-black/60"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, 45vw"
                    className="object-cover p-4 z-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
