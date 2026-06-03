import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-black py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute w-[151.69px] h-[883.27px] bg-[#EB6331] blur-[175px] pointer-events-none z-0"
        style={{
          left: "-247px",
          top: "200px",
          transform: "matrix(-0.77, 0.64, 0.64, 0.77, 0, 0)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 lg:mb-32">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full ">
              <Image
                src="/aboutcombo.png"
                alt="Casino players and games"
                fill
                className="relative!"
                // className="object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-gray-300 font-sora space-y-6   leading-relaxed">
            <p>
              Bitcoin is quickly becoming the currency of choice for online
              casino players across the internet and BitBet has stepped up as
              the premier place to play the hottest games, from popular casinos
              offerings like blackjack, slots and keno to innovative and
              ground-breaking options like our arcade.
            </p>
            <p>
              Many online casino players are making the shift to Bitcoin to fund
              their gaming accounts, drawn to the easy deposit and withdraw
              options, with no-wait payouts 24 hours a day/seven days a week,
              but also the security and anonymity of depositing with a digital
              currency. You can then play in USD in any of the casino games
              online including online slots, table and skill games.
            </p>
            <p>
              BitBet has established itself as the top location to play the
              hottest games, from well-known casino offerings like blackjack,
              slots, and keno to cutting-edge exclusive slots not found in any
              other crypto-currency casino. Bitcoin is quickly replacing other
              online casino currencies as the currency of choice for players.
            </p>
          </div>
        </div>

        {/* Second Block: Text Left, Image Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative">
          <div className="w-full lg:w-1/2 text-gray-300 font-sora space-y-6 leading-relaxed relative z-10">
            <p>
              BitBet saw that need for an exclusive home to Bitcoin wagering and
              set the bar for the best crypto casino industry when it comes to
              only accepting Bitcoins. And while the digital currency is was
              still a new progression in the online casino industry, BitBet was
              one of the first bitcoin casinos. It has years of online gaming
              experience behind it and prides itself of being an innovator and
              always providing its players with the very best in casino options,
              security and Bitcoin banking. So whether your game is roulette,
              craps or video poker, BitBet offers you a customized online casino
              for all players that chose traditional deposit methods or crypto
              currencies.
            </p>
            <p>
              When it comes to accepting Bitcoin, BitBet established the
              standard for the online casino sector in 2013. The company
              recognized the need for an exclusive home for Bitcoin casino
              deposits. And BitBet was among the earliest bitcoin casino, even
              if the use of digital money was still a recent development in the
              online casino sector. It prides itself on being an innovator and
              consistently giving its players the absolute best in casino
              selections, security, and Bitcoin banking. It has years of
              experience in the online gambling industry. Hence, BitBet offers
              you a tailored online casino for all players who selected
              conventional deposit methods or various crypto currencies.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:static">
            <div className="relative lg:absolute lg:right-[-10vw] xl:right-[-15vw] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[60vw] max-w-[600px] lg:max-w-[900px] aspect-4/3 z-0 pointer-events-none">
              <Image
                src="/pokerbg.png"
                alt="Roulette and Dice"
                fill
                className="object-contain lg:object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
