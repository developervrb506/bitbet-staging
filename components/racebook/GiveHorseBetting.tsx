import Image from "next/image";

export interface GiveHorseBettingProps {
    title?: string;
    description?: string;
    additionalText?: string;
    imageUrl?: string;
}

export default function GiveHorseBetting({
    title = "GIVE HORSE BETTING A TRY TODAY!",
    description = "Feeling intrigued as you read through the basics of horse betting? Experience the thrill for yourself with our racebook bets today! You'll get great odds on horse races across the country regardless of the type of bet you select.",
    additionalText = "",
    imageUrl = "/Give-Horse-Betting.png",
}: GiveHorseBettingProps) {
    return (
        <section className="relative w-full bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
            <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    <div className="relative flex flex-col lg:block lg:min-h-[420px]">
                        <div className="relative w-full lg:w-[68%] lg:ml-auto aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8.2] rounded-lg overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt="Horse race with jockeys on the track"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 68vw, 100vw"
                                priority
                            />
                        </div>

                        <div
                            className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] lg:w-[50%] mx-auto lg:mx-0 -mt-8 sm:-mt-12 lg:mt-0 rounded-lg p-6 sm:p-8 md:p-9 lg:p-12 shadow-2xl shadow-black/60"
                            style={{
                                background:
                                    "linear-gradient(105deg, rgba(90, 27, 14, 0.96) 0%, rgba(42, 16, 13, 0.96) 42%, rgba(7, 7, 7, 0.98) 100%)",
                            }}
                        >
                            <h2 className="font-antonio font-bold leading-none text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] uppercase tracking-tight text-white">
                                {title}
                            </h2>

                            <div className="mt-6 sm:mt-8 space-y-4 font-inter text-gray-300 text-sm sm:text-base leading-relaxed">
                                <p>{description}</p>
                                {additionalText ? <p>{additionalText}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
