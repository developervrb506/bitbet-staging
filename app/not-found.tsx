import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | BitBet",
  description:
    "Oops! The page you are looking for does not exist on BitBet. Get back to the premier online crypto casino lobby to play blackjack, roulette, slots, and more.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "250px",
          height: "250px",
          left: "10%",
          top: "15%",
          background: "#EB6331",
          filter: "blur(130px)",
          opacity: 0.25,
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          width: "300px",
          height: "300px",
          right: "15%",
          bottom: "10%",
          background: "#F39120",
          filter: "blur(150px)",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Neon Glowing 404 */}
        <div className="relative mb-6 select-none group">
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-[#F39120] to-[#EB6331] opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000"></div>
          <h1
            className="relative text-[120px] sm:text-[180px] font-black font-montserrat tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white via-white to-gray-500 leading-none drop-shadow-[0_0_35px_rgba(235,99,49,0.3)]"
            style={{
              textShadow: "0 0 40px rgba(235,99,49,0.15)",
            }}
          >
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-4 tracking-wide uppercase">
          page not found
        </h2>
        <div className="h-[2px] w-20 bg-linear-to-r from-[#F39120] to-[#EB6331] mb-6"></div>

        {/* Description */}
        <p className="text-gray-300 font-sora text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
          The block or page you are looking for has been pruned from the ledger
          or never existed. Let&apos;s get you back to safety.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <Link href="/">
            <button className="w-full sm:w-auto min-w-[200px] bg-linear-to-b from-[#F58728] to-[#E25C08] text-white font-montserrat font-bold py-4 px-8 rounded-[12px] shadow-[0px_4px_15px_rgba(235,99,49,0.3)] hover:brightness-110 hover:shadow-[0px_6px_25px_rgba(235,99,49,0.5)] transition-all uppercase tracking-wider text-sm cursor-pointer">
              RETURN HOME
            </button>
          </Link>
          <Link href="/play-for-fun">
            <button className="w-full sm:w-auto min-w-[200px] border border-white/10 hover:border-white/30 hover:bg-white/5 text-white font-montserrat font-bold py-4 px-8 rounded-[12px] transition-all uppercase tracking-wider text-sm backdrop-blur-sm cursor-pointer">
              PLAY FOR FUN
            </button>
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="w-full border-t border-white/5 pt-10">
          <p className="text-gray-400 font-sora text-sm mb-6 uppercase tracking-wider">
            Explore Other Sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {/* Link 1: Bonus */}
            <Link
              href="/bonus"
              className="flex flex-col items-center p-5 rounded-[20px] bg-white/2 border border-white/5 hover:border-[#EB6331]/30 hover:bg-white/4 transition-all duration-300 group"
            >
              <span className="font-montserrat font-bold text-white text-sm mb-1">
                Bonuses
              </span>
              <span className="font-sora text-xs text-gray-400 text-center">
                Claim rewards & promotion codes
              </span>
            </Link>

            {/* Link 2: Cryptos */}
            <Link
              href="/cryptos"
              className="flex flex-col items-center p-5 rounded-[20px] bg-white/2 border border-white/5 hover:border-[#EB6331]/30 hover:bg-white/4 transition-all duration-300 group"
            >
              <span className="font-montserrat font-bold text-white text-sm mb-1">
                Cryptos
              </span>
              <span className="font-sora text-xs text-gray-400 text-center">
                Supported digital currencies
              </span>
            </Link>

            {/* Link 3: Buy Bitcoin */}
            <Link
              href="/how-to-buy-bitcoin"
              className="flex flex-col items-center p-5 rounded-[20px] bg-white/2 border border-white/5 hover:border-[#EB6331]/30 hover:bg-white/4 transition-all duration-300 group"
            >
              <span className="font-montserrat font-bold text-white text-sm mb-1">
                How to Buy
              </span>
              <span className="font-sora text-xs text-gray-400 text-center">
                Quick guide on getting Bitcoin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
