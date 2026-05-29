import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="bg-black pb-10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Image ── */}
          <div className="relative w-full h-full  rounded-lg overflow-hidden shadow-2xl shadow-black/80">
            <Image
              src="/home-why-us.png"
              alt="Why Bet on Sports with Sports Betting Online"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>

          {/* ── Right: Content ── */}
          <div>
            {/* Heading */}
            <h2 className="font-antonio font-bold text-4xl sm:text-5xl uppercase leading-tight mb-10">
              Why Bet on Sports
              <br />
              <span className="text-[#EF4424]">with Sports Betting Online</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-lg tracking-[-0.02em]">
              <p>
                When you choose Sports Betting Online as your online casino, you&apos;re offered benefits that make for the perfect online betting experience. To begin with, our staff team has years of experience in the gaming industry, allowing us to stay up to date with the newest and most exciting sports betting offerings. Backed by Dave Johnson, a respected betting professional, players who choose Sports Betting Online are guaranteed an unforgettable sportsbook experience every time.
              </p>
              <p>
                Furthermore, we focus on creating a streamlined and personalized gaming experience for each sports bettors. No matter what your preferences are, you&apos;ll find a unique online casino experience here. Lastly, customers praise Sports Betting Online for our top-notch customer support. Whenever you have questions about your wager, we&apos;re here to help. Our customer service team will be happy to address your individual questions promptly. If you need clarification about something in our online casino, please ask us a question.
              </p>
              <p>
                You can find answers to your gaming questions on our <span className="text-white font-semibold">FAQ page</span>. Our frequently Asked Questions page contains answers to common questions we hear from our players. You&apos;ll find answers to questions about payouts, deposits, bets, odds, and much more. Browse these frequently asked questions to understand our process before you bet here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
