import Button from "@/components/ui/Button";

const promos = [
  {
    tag: "Welcome Offer",
    title: "100% Deposit Bonus",
    subtitle: "Up to $500",
    description:
      "New players get a 100% match on their first deposit. Start betting with double your bankroll.",
    cta: "Claim Bonus",
    accent: "#d32f2f",
  },
  {
    tag: "Refer a Friend",
    title: "Give $50, Get $50",
    subtitle: "Unlimited Referrals",
    description:
      "Invite your friends and both of you earn $50 in free bets. No limits on how many you refer.",
    cta: "Share Now",
    accent: "#e65100",
  },
  {
    tag: "Weekly Reload",
    title: "10% Reload Bonus",
    subtitle: "Every Monday",
    description:
      "Reload your account every Monday and receive a 10% bonus up to $200. Loyalty rewarded.",
    cta: "Learn More",
    accent: "#7b1fa2",
  },
];

export default function PromotionsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#d32f2f] text-sm font-bold uppercase tracking-widest mb-3">
            Limited Time
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            Featured <span className="text-gradient-red">Promotions</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Exclusive offers for new and existing players. More ways to win,
            every week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: promo.accent }}
              />

              <div className="p-6">
                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
                  style={{
                    color: promo.accent,
                    borderColor: `${promo.accent}40`,
                    background: `${promo.accent}15`,
                  }}
                >
                  {promo.tag}
                </span>

                {/* Amount */}
                <div
                  className="text-4xl font-black mb-1"
                  style={{ color: promo.accent }}
                >
                  {promo.subtitle}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {promo.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {promo.description}
                </p>

                <button
                  className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: promo.accent }}
                >
                  {promo.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Terms and conditions apply. Must be 18+ to participate. Please gamble responsibly.
        </p>
      </div>
    </section>
  );
}
