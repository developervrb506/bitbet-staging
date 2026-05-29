import CardGridSection, { type CardGridItem } from "@/components/ui/CardGridSection";

const bettingTypes: CardGridItem[] = [
    {
        title: "6 Deck Blackjack",
        image: "/LiveCasinoGamesCard-1.png",
        meta: [
            { label: "Min $1" },
            { label: "Max $100" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
    {
        title: "Single Hand Blackjack",
        image: "/LiveCasinoGamesCard-2.png",
        meta: [
            { label: "Min $5" },
            { label: "Max $200" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
    {
        title: "Single Deck Blackjack",
        image: "/LiveCasinoGamesCard-5.png",
        meta: [
            { label: "Min $1" },
            { label: "Max $100" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
    {
        title: "Switch Blackjack",
        image: "/LiveCasinoGamesCard-6.png",
        meta: [
            { label: "Min $1" },
            { label: "Max $50" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
    {
        title: "Double Exposure Blackjack",
        image: "/LiveCasinoGamesCard-3.png",
        meta: [
            { label: "Min $1" },
            { label: "Max $50" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
    {
        title: "Spanish Blackjack",
        image: "/LiveCasinoGamesCard-4.png",
        meta: [
            { label: "Min $1" },
            { label: "Max $50" },
        ],
        actions: [
            { label: "Play Now", href: "/casino", variant: "solid" },
        ],
    },
];

export default function RaceCalender() {
    return (
        <section className="bg-black py-20 lg:py-28">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    {/* ── Top: Heading + Description ── */}
                    <div className="mb-10 lg:mb-14">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                            <h2 className="font-antonio font-bold uppercase leading-none text-[42px] sm:text-[64px] tracking-tight">
                                <span className="text-white">Live Casino</span>{" "}
                                <span className="text-[#EF4424]">Games</span>
                            </h2>

                            <p className="max-w-[390px] font-inter text-sm leading-relaxed text-[#D6D6D6] lg:pt-4">
                                Experience real casino action with live dealers and
                                exciting table games.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
                            {["All Games", "Blackjack", "Table Games", "Video Poker", "Slots Poker"].map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className="min-h-12 rounded-[3px] border border-transparent bg-[#FFFFFF0D] px-5 font-inter text-sm text-[#D6D6D6] transition-colors hover:border-white hover:text-white focus-visible:border-white focus-visible:outline-none sm:px-7"
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-12">
                            <span className="h-px bg-[#21100C]" aria-hidden="true" />
                            <span className="h-px bg-[#21100C]" aria-hidden="true" />
                            <span className="h-px bg-[#21100C]" aria-hidden="true" />
                        </div>
                    </div>

                    {/* ── Cards Grid ── */}
                    <CardGridSection
                        items={bettingTypes}
                        className="mb-8"
                        cardClassName="p-5 sm:p-6 group rounded-lg relative custcard overflow-hidden bg-[#ffffff0d] from-[#5A2418] to-[#2B0D08] hover:shadow-lg hover:shadow-black/50 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    );
}
