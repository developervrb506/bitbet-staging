import CardGridSection, { type CardGridItem } from "@/components/ui/CardGridSection";

const bettingTypes: CardGridItem[] = [
  {
    title: "Spread Betting",
    description: "Choose your margin to win or lose on any team with spread betting.",
    image: "/spred-betting.png",
  },
  {
    title: "Moneylines",
    description: "Think you know who will win? Moneylines are great ways for beginners to get involved in our online casino. In moneylines, you'll select one player or team you think will win.",
    image: "/Moneylines.png",
  },
  {
    title: "Teasers",
    description: "Combine multiple bets on sports to get more favorable odds.",
    image: "/teasers.png",
  },
];

export default function BettingTypesSection() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          {/* ── Top: Heading + Description ── */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-20 lg:gap-32 mb-12">
            {/* Left: Heading */}
            <div className="flex-1">
              <h2 className="font-antonio font-bold text-4xl sm:text-5xl uppercase leading-tight">
                Types of Sports Betting
                <br />
                <span className="text-[#EF4424]">In Our Online Casino</span>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We strive to offer diverse ways for players to engage in sports bets. No matter what type of sports betting you like, we&apos;re bound to have it! Stick with your favorites, or try something new. Check out a few of our most exciting ways to bet now:
              </p>
            </div>
          </div>

          {/* ── Cards Grid ── */}
          <CardGridSection items={bettingTypes} className="mb-8" />

          {/* ── Bottom description ── */}
          <p className="text-[#D6D6D6] text-sm leading-relaxed">
            Basketball lovers can bet now on NBA live odds, NBA lines, NBA times, and more. If football is your sport of choice, check out our NFL betting with exciting NFL odds when betting online. Bet here for the best options to get involved in sports betting!
          </p>
        </div>
      </div>
    </section>
  );
}
