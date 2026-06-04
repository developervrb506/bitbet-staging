import Image from "next/image";
import CheckmarkListItem from "./CheckmarkListItem";

export default function BonusSections() {
  return (
    <section className="relative w-full bg-black py-16 md:py-32 text-white overflow-hidden md:overflow-visible">
      {/* Background Gradient Ellipse 7 */}
      <div
        className="absolute w-[151.69px] h-[883.27px] left-[-200px] top-0 bg-[#EB6331] blur-[175px] pointer-events-none z-0"
        style={{ transform: "matrix(-0.77, 0.64, 0.64, 0.77, 0, 0)" }}
      />

      <div className=" mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8  space-y-24 md:space-y-32 relative z-10">
        {/* Section 1: Online Casino Terms */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full mb-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-[46px] font-bold font-sora leading-10 md:leading-14 max-w-full lg:max-w-[420px]">
                Online Casino Bonus Terms and Conditions:
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-300 font-sora text-sm md:text-base leading-relaxed">
              <p>
                All bonuses must be claimed upon deposit and before the deposit
                money starts being used. The casino deposit bonus amount will be
                credited into a separate bonus balance. You must choose to play
                with your deposit balance or the bonus balance. The casino
                deposit bonus winnings will be credited to the regular balance
                and are cashable once the wagering requirement has been met.
              </p>
              <p>
                Customers who receive the 200% betting bonus are subject to a
                40-time wagering requirement before being eligible to cash out
                winnings. The wagering requirement is calculated as follows: The
                deposit amount plus the bonus amount times 40 (forty). The
                minimum deposit amount to qualify for the 200% bonus is $25. The
                maximum bonus amount is $1,000 USD. Bonuses are not forfeitable
                once claimed. One bonus is allowed per customer, per household,
                and per IP address. Deposit bonuses will expire after 14 days
                after being issued if not used and 7 days after being used.
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <Image
              src="/onlinecasino.png"
              alt="Online Casino"
              fill
              className="relative! rounded-[40px] md:rounded-[100px]"
            />
          </div>
        </div>

        {/* Section 2: Examples */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center w-full">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-[46px] font-bold font-sora mb-8">
              Examples:
            </h2>
            <ul className="space-y-5 font-sora text-white/80 text-sm md:text-base">
              {[
                "Deposit $20 and get a $50 Bonus",
                "Deposit $50 and get a $100 Bonus",
                "Deposit $100 and get a $200 Bonus",
                "Deposit $500 or more and get a $1,000 Bonus",
              ].map((item, idx) => (
                <CheckmarkListItem key={idx} align="center">
                  <span>{item}</span>
                </CheckmarkListItem>
              ))}
            </ul>
          </div>
          <div className="w-full ">
            <Image
              src="/bonusexamples.png"
              alt="Bonus Examples"
              className="relative!"
              fill
              // className="object-contain object-center md:object-right"
            />
          </div>
        </div>

        {/* Section 3: Contribution */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center w-full">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-[30px] font-bold font-sora mb-8 leading-tight max-w-fulllg:max-w-[545px]">
              Different Games account for different wagering contribution.
            </h2>
            <ul className="space-y-5 font-sora text-white/80 text-sm md:text-base mb-8">
              {[
                "100% Slots",
                "20% Table Games",
                "10% Video Poker",
                "Any other casino games played will not count towards wagering requirements.",
              ].map((item, idx) => (
                <CheckmarkListItem key={idx} align="start">
                  <span className="max-w-[90%] leading-relaxed">{item}</span>
                </CheckmarkListItem>
              ))}
            </ul>
            <p className="text-white/80 font-sora text-sm md:text-base leading-6">
              Must be 18+ and located in accepted territories to qualify.
              Bonuses are available for recreational players only and subject to
              management discretion. We reserve the right to modify bonuses at
              any time. There is a zero-tolerance policy toward casino bonus
              abuse or fraudulent activity. We reserve the right to stop any
              further betting bonuses or remove bonuses and winnings from such
              accounts.
            </p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Image
              src="/contribution.png"
              alt="Wagering Contribution"
              fill
              className="relative!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
