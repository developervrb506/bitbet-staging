import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-black py-16 lg:py-24 relative">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Image ── */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-black/80">
            <Image
              src="/home-about.png"
              alt="Sports Betting Online"
              fill
              className="object-cover"
              priority
              unoptimized
/>
            {/* Dark overlay for text readability if needed */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* ── Right: Content ── */}
          <div>
            {/* Heading */}
            <h2 className="font-antonio font-bold text-4xl sm:text-5xl lg:text-5xl uppercase leading-tight mb-8">
              About Sports Betting{" "}
              <span className="text-[#EF4424]">Online</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-lg tracking-[-0.02em]">
              <p>
                At Sports Betting Online, we&apos;re more than just a place for online sports bets. In recent years, sports bets online have become even more popular. Whether you&apos;re a hardcore sports fan or watch a few games occasionally, you&apos;ll find that exciting betting online can be. Bet on your favorite team for any of your favorite sports or try a random team; the choice is yours!
              </p>
              <p>
                While there are many websites for sports bets online, we set ourselves apart with our cashback bonus! Sports Betting Online is the only sportsbook offering a guaranteed 10% cashback bonus. Whether you win or you lose, you&apos;ll receive a cashback bonus! (Yes, you heard that right!) Unlike other online sports betting companies, we follow through on our promises and deposit 10% of your total wins or losses into your account as a cashback bonus.
              </p>
              <p>
                Whether you&apos;re a new customer or a frequent bettor, we continue to offer a cashback bonus to keep you pleased with our betting service. Currently, none of our competitors provide this great cashback incentive. We repeatedly make the cashback bonus easy to earn with no fine print or confusing restrictions. Rather than bonuses only for new players, we keep the fun going for all bettors!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient background on right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at 100% 45%,
              rgba(239, 68, 36, 0.28) 0%,
              rgba(239, 68, 36, 0.16) 18%,
              rgba(239, 68, 36, 0.08) 35%,
              rgba(0, 0, 0, 0) 65%
            )
          `,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
