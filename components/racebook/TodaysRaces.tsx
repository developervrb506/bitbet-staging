import Image from "next/image";
import Link from "next/link";

export interface TodaysRacesProps {
    date?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function TodaysRaces({
    date = "May 10, 2026",
    title = "HORSE RACING ODDS",
    subtitle = "TODAY'S RACES",
    description = "Daily odds from top events",
    imageUrl = "/today-races.png",
    buttonText = "Read More",
    buttonHref = "/horse-racing-odds",
}: TodaysRacesProps) {
    return (
        <section className="relative w-full bg-black py-16 lg:py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-[#EF4424]/10 blur-[140px]" />

            <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
                {/* Section Heading */}
                <div className="mb-10 lg:mb-14">
                    <h2 className="font-antonio font-bold uppercase leading-none text-[42px] sm:text-[64px] tracking-tight">
                        <span className="text-white">TODAY’S </span>
                        <span className="text-[#EF4424]">RACES</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

                    {/* Left Image */}
                    <div className="relative rounded-[14px] overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt="Horse Racing"
                            width={700}
                            height={420}
                            className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
                            priority
                        />
                    </div>

                    {/* Right Content */}
                    <div className="max-w-[500px]">

                        {/* Date */}
                        <div className="flex items-center gap-2 text-[#D6D6D6] mb-5">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>

                            <span className="text-sm font-medium tracking-wide">
                                {date}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-antonio font-bold uppercase text-white leading-[1.05] text-[42px] sm:text-[54px] lg:text-[56px] mb-5">
                            HORSE RACING ODDS
                        </h3>

                        {/* Description */}
                        <p className="text-[#D6D6D6] text-base leading-relaxed mb-8 max-w-[420px]">
                            Daily odds from top events
                        </p>

                        {/* Button */}
                        <Link
                            href={buttonHref}
                            className="inline-flex items-center justify-center bg-[#FB411C] hover:bg-[#d63a1d] transition-all duration-300 text-white text-sm font-semibold px-7 py-3 rounded-md shadow-[0_0_25px_rgba(239,68,36,0.25)]"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
