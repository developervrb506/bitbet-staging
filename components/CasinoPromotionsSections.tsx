import React from "react";
import Image from "next/image";
import DecorativeEllipse from "./DecorativeEllipse";
import ImageTextSection from "./ImageTextSection";

export default function CasinoPromotionsSections() {
  return (
    <section className="relative w-full  py-20 lg:py-36 overflow-hidden bg-black">
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8  space-y-24">
        <DecorativeEllipse left="-247px" top="10%" />

        {/* Tournament Login Card */}
        <div
          className=" rounded-[30px] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 "
          style={{
            background:
              " radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(11.2993px)",
          }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white font-sora  leading-tight">
            NFL Weekly Casino
            <br />
            Blackjack
            <br />
            Tournament
          </h2>

          <div className="flex flex-col gap-5 w-full max-w-[360px]">
            <input
              type="text"
              placeholder="Username"
              className="bg-[#2A2A2A] text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F58728] w-full font-sora text-sm border border-transparent transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#2A2A2A] text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#F58728] w-full font-sora text-sm border border-transparent transition-colors"
            />
            <button className="bg-[linear-gradient(180deg,#F39120_0%,#EB6331_100%)] text-white font-montserrat font-bold py-4 px-8 rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all text-sm uppercase w-full mt-2">
              LOGIN
            </button>
          </div>
        </div>

        {/* General Rules Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className=" w-full ">
              <Image
                src="/aboutcombo.png"
                alt="Casino players and games"
                fill
                className="relative!"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-32">
            <h3 className="text-[26px] font-bold text-white font-sora mb-8">
              General Rules:
            </h3>
            <ul className="space-y-6">
              {[
                "Contest is live each week of the NFL season.",
                "Contest is exclusive for the 'Vegas Offshore' casino.",
                "Contest is only available on the single-hand blackjack game.",
                "Every true blackjack (Ace and 10) will be replaced with 1 of 10 players chosen that week. Players will rotate each week between quarterbacks, running backs and wide receivers.",
                "The weekly winner for quarterbacks will be the one with the most passing yards, running backs will be rushing yards and wide receivers will be receiving yards.",
                "Collect as many cards of each player during the week as possible during the NFL season.",
                "Collected Cards will be shown in the 'Contest' link on the top menu of the blackjack game.",
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="relative w-6 h-6 shrink-0 mt-0.5">
                    <Image
                      src="/bonuscheckmark.svg"
                      alt="Checkmark"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white/80 font-sora text-base leading-relaxed">
                    {rule}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to win? Section */}
        <div className="flex flex-col items-center pt-8 relative">
          {/* Decorative background based on Figma specs */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-100px] w-screen h-[1000px] bg-[linear-gradient(180deg,#EB6331_39.02%,rgba(235,99,49,0)_100%)] opacity-10 pointer-events-none -z-10" />

          <h2 className="text-3xl lg:text-[40px] font-bold text-white font-sora mb-6 text-center">
            How to win?
          </h2>
          <p className="text-white/80 font-sora text-sm md:text-base text-center max-w-[1063px]  mb-12 lg:mb-16 leading-relaxed">
            You will earn FREE cash deposited to your account w/ NO ROLLOVER
            based on the number of cards you collected of the player that wins
            for that individual week, Winnings will be credited Tuesday morning
            after Monday Night Football.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16 w-full">
            {[
              {
                num: "01",
                text: "Let's assume Aaron Rodgers has the most passing yards in week 1. Let's also assume you collected 25 Aaron Rodgers cards in week 1.",
              },
              {
                num: "02",
                text: "You would win a FREE cash amount equal to the number of Aaron Rodgers cards collected multiplied by your average bet over the course of the week.",
              },
              {
                num: "03",
                text: "If your average bet over the entire playoffs was $20 then you would get a FREE bonus equal to: (25 cards x $20) or $500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${idx === 1 && "mt-14"} h-fit rounded-[15px] p-8 lg:p-10 flex flex-col relative`}
                style={{
                  background:
                    "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  backdropFilter: "blur(11.2993px)",
                }}
              >
                <div className="font-bold text-[100px] leading-[80px] bg-[linear-gradient(180deg,#FFFFFF_19.28%,rgba(255,255,255,0)_80.9%)] bg-clip-text text-transparent opacity-[0.15] font-sora ">
                  {item.num}
                </div>
                <p className="text-white/80 font-sora text-sm leading-relaxed z-10 relative">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/80 font-sora text-sm leading-relaxed">
              The total amount credited to your account will be $500 w/ NO
              ROLLOVER.
              <br />
              Credit players are not eligible for this contest without prior
              approval from your agent.
            </p>
          </div>
        </div>

        {/* Online Gambling Promotions Section */}
        <div className="flex flex-col pt-24 pb-12">
          <h2 className="text-3xl lg:text-[46px] font-bold text-white font-sora mb-16 text-center leading-tight">
            Online gambling <br /> promotions at bitbet.com
          </h2>

          <div className="flex flex-col gap-24">
            {/* Top part */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className=" w-full  ">
                  <Image
                    src="/gambling.png"
                    alt="Gambling Promotions"
                    fill
                    className="relative!"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-6 text-white/80 font-sora text-sm leading-relaxed">
                  <p>
                    Prepare to embark on an exhilarating journey through a realm
                    of unbeatable excitement and unparalleled rewards. Our
                    online casino is not just a destination for world-class
                    gaming; it's also your gateway to an array of captivating
                    promotions that promise to elevate your experience beyond
                    your wildest expectations.
                  </p>
                  <p>
                    Dive into a universe where every wager, every spin, and
                    every card dealt brings you closer to untold treasures. Our
                    bet promos are meticulously crafted to offer you more than
                    just entertainment they are designed to amplify the thrill
                    of every gaming session, ensuring that your time with us is
                    nothing short of extraordinary.
                  </p>
                  <p>
                    As you explore this Promotions Page, you'll discover a
                    diverse range of offers that cater to both new and seasoned
                    players. From the moment you join our casino, you'll be
                    greeted by a generous welcome that sets the stage for an
                    adventure filled with bonuses, free spins, and a multitude
                    of other surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle part */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2">
                <div className="space-y-6 text-white/80 font-sora text-sm leading-7">
                  <p>
                    Welcome Bonus Package: Begin your journey with a bang! New
                    players are greeted with a generous welcome bonus that
                    includes bonus funds and free spins on select slots. This
                    bonus is designed to give you a head start and enhance your
                    chances of winning big from the get-go.
                  </p>
                  <p>
                    Deposit Match Bonuses: Boost your bankroll every time you
                    make a deposit! Our deposit match bonuses ensure that you
                    get extra funds for your deposits. Watch your balance grow
                    as you take advantage of these exciting online gambling
                    promo codes.
                  </p>
                  <p>
                    Free Spins Frenzy: Calling all slot enthusiasts! Our Free
                    Spins Frenzy gambling promotion lets you spin the reels of
                    popular slots without touching your own funds. Enjoy a set
                    number of free spins on featured games and keep what you
                    win. win.
                  </p>
                  <p>
                    Loyalty Rewards: We value our loyal players, and our loyalty
                    program reflects that. As you play, you'll earn loyalty
                    points that can be redeemed for cash bonuses, free spins,
                    and even exclusive gifts. Climb the loyalty tiers for
                    greater rewards and privileges.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full">
                  <Image
                    src="/sevenpoker.png"
                    alt="Casino Poker and Slots"
                    fill
                    className="relative!"
                  />
                </div>
              </div>
            </div>

            {/* Bottom part */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full">
                  <Image
                    src="/wheel.png"
                    alt="Casino Wheel"
                    fill
                    className="relative!"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="space-y-6 text-white/80 font-sora text-sm leading-7">
                  <p>
                    Tournaments and Leaderboards: Compete against fellow players
                    in thrilling tournaments and climb the leaderboards for a
                    chance to win amazing prizes. Whether you're into slots,
                    poker, or blackjack, our regular tournaments add an extra
                    layer of excitement to your gameplay.
                  </p>
                  <p>
                    Seasonal Specials: Keep an eye out for our special online
                    gambling promo codes tied to holidays, seasons, and major
                    events. These limited-time offers can include cash back
                    bonuses, unique in-game rewards, and more.
                  </p>
                  <p>
                    Refer a Friend Bonus: Share the fun with your friends and
                    get rewarded for it! When you refer a friend to our casino
                    and they make their first deposit, both you and your friend
                    can receive a special bonus as a token of our appreciation.
                  </p>
                  <p>
                    Exclusive VIP Club: For our most dedicated players, we offer
                    an exclusive VIP club with personalized promotions,
                    dedicated account managers, faster withdrawals, and access
                    to high-stakes tables. If you're looking for the ultimate
                    casino experience, our VIP club is where you belong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12 lg:pb-24">
          <div className="bg-[#EB6331] rounded-l-[180px] rounded-tr-[20px] rounded-br-[20px] p-6 lg:p-4 lg:pr-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="relative w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] rounded-full bg-[#D9D9D9] p-7 shrink-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src="/bitcoin.svg"
                  alt="Bitcoin"
                  fill
                  className="object-contain drop-shadow-2xl w-[286px] h-[286px]"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left py-4 lg:py-0">
              <h2 className="text-3xl lg:text-[46px] font-bold text-white font-sora mb-6 leading-tight">
                Claiming Your Gambling <br className="hidden lg:block" />{" "}
                Promotions
              </h2>
              <p className="text-white/90 font-sora text-sm lg:text-[15px] leading-relaxed max-w-[700px]">
                Claiming these promotions is easy! Simply log in to your
                account, navigate to the &quot;Promotions&quot; section, and
                choose the offer that excites you the most. Follow the
                instructions provided to receive your bonus funds, free spins,
                or other rewards.
              </p>
            </div>
          </div>
        </div>

        {/* Bet Promos Terms Section */}
        <div>
          <ImageTextSection
            title={
              <>
                Bet Promos Terms
                <br />
                and Conditions Apply
              </>
            }
            paragraphs={[
              "Please be aware that all promotions come with specific terms and conditions. These may include wagering requirements, minimum deposit amounts, and expiration dates. It's important to read and understand these terms before participating in any gambling promotion.",
              <React.Fragment key="2">
                At our online casino, we're committed to making your gaming
                experience as thrilling and rewarding as possible. Our
                promotions are designed to give you more chances to win, more
                entertainment, and more value for your time.{" "}
                <a
                  href="#"
                  className="underline hover:text-white transition-colors"
                >
                  Join us
                </a>{" "}
                today and make the most of these incredible offers!
              </React.Fragment>,
            ]}
            imageSrc="/whyprovability.png"
            imageAlt="Bet Promos Terms and Conditions"
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
}
