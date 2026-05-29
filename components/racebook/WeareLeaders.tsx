import Image from "next/image";

export interface WeareLeadersProps {
    title?: string;
    subtitle?: string;
    description?: string;
    additionalText?: string;
    imageUrl?: string;
}

export default function WeareLeaders({
    title = "WE'RE LEADERS IN",
    subtitle = "RACEBOOK BETTING",
    description = "As a leader in racebook betting, Sportsbettingonline.ag strives to make betting fun and simple. With our easy process, you'll never want to leave at a betting window again! If you're new to horse racing, we give you all the information you need to place a bet.",
    additionalText = "Check out the \"today's races\" list on the left-hand side of our racebook betting page. You'll find many exciting games to bet on, taking place same-day. Want to look ahead at upcoming races? View our race calendar to get prepared for your upcoming bets too. With Sportsbettingonline.ag as your horse to, you'll always have an exciting race to bet on.",
    imageUrl = "/we-are-leader.png",
}: WeareLeadersProps) {
    return (
        <section className="relative w-full bg-black py-8 lg:py-12 overflow-hidden">
            <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    {/* Card with gradient background */}
                    <div
                        className="rounded-lg overflow-hidden p-8 lg:p-12"
                        style={{
                            background: `
              radial-gradient(
                circle at left center,
                rgba(235, 44, 10, 0.45) 0%,
                rgba(236, 48, 10, 0.35) 30%,
                rgba(20, 0, 0, 0.92) 65%,
                rgba(17, 15, 15, 1) 115%
              )
            `,
                        }}
                    >
                        {/* Main Grid: Image Left, Content Right */}
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left: Image */}
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-black/80">
                                <Image
                                    src={imageUrl}
                                    alt="We Are Leaders"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                                {/* Image overlay for depth */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)",
                                    }}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Right: Content */}
                            <div className="space-y-6">
                                {/* Main Title */}
                                <h2 className="font-antonio font-bold leading-tight text-[42px] sm:text-[64px] tracking-tight text-white">
                                    {title}
                                    <br />
                                    <span className="text-[#EF4424]">{subtitle}</span>
                                </h2>

                                {/* First Description */}
                                <p className="font-inter text-[#D6D6D6] text-base sm:text-lg leading-6">
                                    {description}
                                </p>

                                {/* Second Description */}
                                <p className="font-inter text-[#D6D6D6] text-base sm:text-lg leading-6">
                                    {additionalText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
