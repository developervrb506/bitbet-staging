import Image from "next/image";
import CasinoCollage from "./CasinoCollage";

export default function InfoSection() {
  return (
    <section className="relative w-full py-10 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute pointer-events-none z-0 w-[1920px] h-[688px] left-1/2 -translate-x-1/2 top-0 bg-linear-to-b from-[#F39120] to-transparent opacity-[0.15]" />
      <div className="absolute left-[-20%] top-[60%] -translate-y-1/2 w-[500px] h-[500px] bg-[#EB6331] blur-[250px] transform-[matrix(1,0,0,-1,0,0)] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-20 lg:mb-40">
          <h2 className="text-3xl md:text-[46px] font-bold text-white text-center font-sora leading-tight tracking-wide max-w-[1000px] mx-auto mb-12">
            Place Your Online Bitcoin{" "}
            <span className="inline-block align-middle mx-2">
              <Image
                src="/bitcoin.png"
                alt="Bitcoin"
                width={100}
                height={54}
                className="object-contain"
              />
            </span>{" "}
            Bets with{" "}
            <span className="text-[#EB6331] underline decoration-[#EB6331] underline-offset-8">
              Bitbet.com
            </span>{" "}
            The Best CryptoCasino
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 text-white/80 text-sm md:text-base font-sora leading-relaxed">
            <div className="space-y-6">
              <p>
                Bitbet focuses on user-friendly casino entertainment experience
                combined with digital technology. BitBet represents the
                evolution of online casinos by being one of the first to
                accept bitcoin bets. Customers can discreetly transfer money and
                cash out their winnings. BitBet is a top option when it comes
                to Bitcoin casinos. Not only for easy deposits and withdrawals
                but also because it offers it’s players all of their favorite
                games like blackjack, roulette, slots and craps while ensuring
                the safety and security that only bitcoin gambling can offer.
              </p>
              <p>
                Being a member of BitBet entitles players to a host of
                additional benefits, such as our thrilling comps programs,
                bonuses, and the newest slots, table games, and cutting-edge
                arcade games. You'll discover not only the most well-liked
                casino options, but also brand-new, exclusive games. its
                players.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                One of the many benefits of using a crypto casino is the
                security and anonymity in dealing in a digital currency. Bitbet
                only accepts Bitcoin, which means there’s no legal limits or
                regulations preventing you from playing your favorite casino
                games. BitBet is “Certified Fair Gambling” and strictly
                regulated with cutting-edge privacy protection for all its
                players. Players also receive plenty of benefits from being a
                BitBet member, including our exciting comps programs, bonuses
                and the hottest slots, table games, and innovative arcade
                offerings. Not only will you find the most popular casino
                options but also new award-winning games that you won’t find
                anywhere else.
              </p>
              <p>
                Bitcoin Casino USA:BitBet is “Certified Fair Gambling” and
                strictly regulated with cutting-edge privacy protection for all
                its players.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row  items-center gap-16 lg:gap-32">
          {/* Left Text */}
          <div className="flex-1 space-y-10 text-white/70 text-sm md:text-base font-sora leading-relaxed">
            <h3 className="text-3xl md:text-[46px] font-bold text-white font-sora leading-tight mb-6 max-w-full lg:max-w-[479px]">
              Bitcoin Casinos are highly secure
            </h3>
            <p>
              The confidentiality and anonymity of transacting with digital
              currency is one of the numerous advantages of using a crypto
              casino. Since Bitbet accepts Bitcoin and many other crypto
              currencies, there are no restrictions preventing you from enjoying
              your preferred casino games internationally. BitBet offers all of
              its players cutting-edge privacy protection and is "Certified Fair
              Gambling" compliant.
            </p>
            <p>
              With BitBet, players can instantly fund their accounts and start
              betting in just a few easy steps, which is not possible with other
              online bitcoin casinos. Also, there is no hold-up or waiting
              period when it comes time to withdraw your winnings while your
              profits are processed and paid. Players can instantly pay out
              using Bitcoin.
            </p>
          </div>

          <div className="flex-1 w-full lg:mb-[250px] mb-[150px]">
            <CasinoCollage />
          </div>
        </div>
      </div>
    </section>
  );
}
