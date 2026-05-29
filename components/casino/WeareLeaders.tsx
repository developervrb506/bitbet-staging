import Image from "next/image";

export interface WeareLeadersProps {
    title?: string;
    subtitle?: string;
    description?: string;
    additionalText?: string;
    imageUrl?: string;
}

export default function WeareLeaders({
    title = "Experience Casino Gaming",
    subtitle = "Anytime, Anywhere",
    description = "Whether you're on the go on your mobile device or at home on your computer, you'll experience the thrill with our wide selection of online casino games. Skip the hassle of going to a brick-and-mortar casino, and bet right from your electronic device. Deposit funds into your account to get started placing your first bet.",
    additionalText = "SportsBettingOnline offers 24/7/365 online casino games featuring many of your favorite classic games. We provide many kinds of blackjack games, table games, video poker games, and even online slot machine games. These games offer a fun time for bettors of any level. In addition, you'll get access to our 24/7 customer support to assist you with any questions about our online casino. We offer the ability to deposit funds using many platforms to appeal to our differing customer's needs.",
    imageUrl = "/experiance-casino.png",
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
                                <p className="font-inter text-[#D6D6D6] text-base sm:text-lg leading-relaxed tracking-[-0.02em]">
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
