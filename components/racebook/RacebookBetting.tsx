import Image from "next/image";

export interface RacebookBettingProps {
    title?: string;
    subtitle?: string;
    description?: string;
    additionalText?: string;
    imageUrl?: string;
}

export default function RacebookBetting({
    title = "RACEBOOK BETTING AT",
    subtitle = "SPORTSBETTINGONLINE.AG",
    description = "Many sports bettors love the thrill of betting online for horse racing! Before online racebook offerings, you had to be at the track to place your bets. Now with our easy online horse betting, you can bet on your favorite horse races from the comfort of your own home. You can bet anytime, any time of the day or night. With information constantly updated and at your fingertips, you can track your odds and find your favorite racing wagers in seconds.",
    additionalText = "We offer horse racing betting on many races taking place throughout the country. Even better, horse betting takes place year-round, so you'll never have to wait to bet on races like you do for other sports. Not only does horse racing take place year-round, but there are games every day to bet on! You'll be sure to find a horse race that piques your interest! SportsBettingOnline offers many exciting ways to bet on horse racing in our racebook, including straight bets to win, place, or show bets.",
    imageUrl = "/race-batting.png",
}: RacebookBettingProps) {
    return (
        <section className="relative w-full bg-black py-16 lg:py-24 overflow-hidden">
            {/* Background gradient overlay */}
            {/* Background gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
      radial-gradient(
        circle at 0% 50%,
        rgba(120, 20, 0, 0.45) 0%,
        rgba(120, 20, 0, 0.18) 18%,
        rgba(0, 0, 0, 0) 45%
      ),
      linear-gradient(
        90deg,
        #050505 0%,
        #000000 40%,
        #020202 100%
      )
    `,
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    {/* Main Grid: Content Left, Image Right */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            {/* Main Title */}
                            <h2 className="font-antonio font-bold leading-tight text-[42px] sm:text-[64px] tracking-tight text-white">
                                {title}
                                <br />
                                <span className="text-white">{subtitle}</span>
                            </h2>

                            {/* First Description */}
                            <p className="font-inter text-gray-300 text-base sm:text-lg leading-6">
                                {description}
                            </p>

                            {/* Second Description */}
                            <p className="font-inter text-gray-300 text-base sm:text-lg leading-6">
                                {additionalText}
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-black/80">
                            <Image
                                src={imageUrl}
                                alt="Racebook Betting"
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
                    </div>
                </div>
            </div>
        </section>
    );
}
