import CardGridSection, { type CardGridItem } from "@/components/ui/CardGridSection";

const bettingTypes: CardGridItem[] = [
    {
        title: "RACE CALENDER",
        description: "For a complete list of race events",
        image: "/RACE-CALENDER.png",
        cta: {
            label: 'Read More',
            href: '#',
            variant: "text",
        }
    },
    {
        title: "RACE TRACKS",
        description: "For a complete list of tracks",
        image: "/RACE-TRACKS.png",
        cta: {
            label: 'Read More',
            href: '#',
            variant: "text",
        }
    },
    {
        title: "LIVE BETTING",
        description: "Real-time odds and action",
        image: "/LIVE-BETTING.png",
        cta: {
            label: 'Read More',
            href: '#',
            variant: "text",
        }
    },
];

export default function RaceCalender() {
    return (
        <section className="bg-black py-20 lg:py-28">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    {/* ── Top: Heading + Description ── */}
                    <div className="mb-10 lg:mb-14">
                        <h2 className="font-antonio font-bold uppercase leading-none text-[42px] sm:text-[64px] tracking-tight">
                            <span className="text-white">Race</span>{" "}
                            <span className="text-[#EF4424]">Calendar</span>
                        </h2>
                    </div>

                    {/* ── Cards Grid ── */}
                    <CardGridSection items={bettingTypes} className="mb-8" />
                </div>
            </div>
        </section>
    );
}
