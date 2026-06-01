import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { label: "About", href: "/about" },
  { label: "Bonus", href: "/bonus" },
  { label: "Provability", href: "/provability" },
  { label: "Cryptos", href: "/cryptos" },
  { label: "Play For Fun", href: "/play-for-fun" },
  { label: "Casino Promotions", href: "/casino-promotions" },
  { label: "How to Buy Bitcoin?", href: "/how-to-buy-bitcoin" },
  { label: "Buy Bitcoin", href: "/buy-bitcoin" },
];

const blogLinks = [
  { label: "BitBet Blog", href: "/blog/bitbet" },
  { label: "Casino Blog", href: "/blog/casino" },
  { label: "Poker Magazine", href: "/blog/poker" },
  { label: "Sport Betting Tips", href: "/blog/sport-betting-tips" },
];

const securityLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "Affiliate Program", href: "/affiliate" },
];

const socials = [
  { label: "Facebook", href: "#", icon: "/Facebook.svg" },
  { label: "X (Twitter)", href: "#", icon: "/twitter.svg" },
  { label: "YouTube", href: "#", icon: "/Youtube.svg" },
  { label: "LinkedIn", href: "#", icon: "/linkedin.svg" },
  { label: "Instagram", href: "#", icon: "/instagram.svg" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/footerbg.png')" }}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 pb-16">

          <div className="flex flex-col">
            <Link href="/" className="inline-block">
              <Image
                src="/bitbet.svg"
                alt="BitBet Logo"
                width={156}
                height={60}
                className="w-auto h-auto"
                unoptimized
              />
            </Link>
          </div>

          <div>
            <h3 className="text-white font-sora text-[20px] transition-colors mb-7 font-bold">Navigation</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white font-sora">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-sora text-[20px] transition-colors mb-7 font-bold">Blog</h3>
            <ul className="space-y-4">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white font-sora">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-sora text-[20px] transition-colors mb-7 font-bold">Security & Privacy</h3>
            <ul className="space-y-4">
              {securityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white font-sora">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 xl:pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B3B3B3] font-sora text-[20px]">
            Copyright © 2026 <span className="text-[#EB6331]">BitBet</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-[#EB6331] flex items-center justify-center  p-4 transition-colors"
              >
                <Image src={social.icon} alt={social.label} width={16} height={16} className="w-auto h-auto" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
