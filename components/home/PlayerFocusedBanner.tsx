import Image from "next/image";

export default function PlayerFocusedBanner() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-black" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Player Focused Box ── */}
        <div
          className="max-w-[1440px] mx-auto rounded-xl overflow-hidden p-8 lg:p-12"
          style={{
            background: `
          radial-gradient(circle at left center, rgba(170,60,25,0.55) 0%, transparent 90%),
          linear-gradient(
            90deg,
            #3b120b 0%,
            #2a0d08 22%,
            #160908 48%,
            #0c0c0c 78%,
            #080808 100%
          )
        `,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: Text Content ── */}
            <div>
              {/* Heading */}
              <h2 className="font-antonio font-bold text-4xl sm:text-5xl uppercase leading-tight text-white mb-6">
                Player Focused Sports Betting
              </h2>

              {/* Description paragraphs */}
              <div className="space-y-4 text-white/85 leading-relaxed text-sm sm:text-lg tracking-[-0.02em]">
                <p>
                  Why should you choose Sports Betting Online for your online betting platform? We focus on our players through an enhanced online casino experience. Avid sports bettors know us for our seamless online gaming platform, exciting promotions, and simple and easy betting process. Never bet on sports before? You&apos;re in the right place! Our online casino process is easy for beginners.
                </p>
                <p>
                  You can register and wager on your first sports bets in only a few minutes! Once you open an account, you&apos;ll be on your way to winning! Not to mention, we offer sportsbook betting options in all of your favorite sports. You&apos;re guaranteed to find your favorite sport to bet on, from basketball to soccer, in no time.
                </p>
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div className="relative w-full h-full  rounded-lg overflow-hidden">
              <Image
                src="/Home-Player-Focused.png"
                alt="Player Focused Sports Betting"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
