import Link from "next/link";
import Image from "next/image";

/* ── Info links — 3 visual columns matching the reference image ── */
const infoCol1 = [
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "About Us", href: "/about" },
  { label: "Mission Statement", href: "/mission" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const infoCol2 = [
  { label: "Casino Promotions", href: "/casino-promotions" },
  { label: "Press Releases", href: "/press-releases" },
  { label: "Sports News", href: "/sports-news" },
  { label: "Info Graphics", href: "/info-graphics" },
  { label: "Cashier", href: "/cashier" },
  { label: "Software", href: "/software" },
];

const infoCol3 = [
  { label: "Sportsbook Bet Types Limits", href: "/sportsbook-limits" },
  { label: "Racebook Tracks Offered – Limits", href: "/racebook-limits" },
  { label: "Racebook Bet Types Limits", href: "/racebook-bet-limits" },
  { label: "Casino Limit – Play For Fun", href: "/casino-limits" },
  { label: "Mobile Betting", href: "/mobile-betting" },
  { label: "Sports – Leagues", href: "/sports-leagues" },
];

/* ── Social icons ── */
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 7s-.3-2-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.6 3 12 3 12 3s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.7 12 21.7 12 21.7s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.7 1.2-2.7 1.2-2.7s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
    //   style={{
    //     background: `
    //   radial-gradient(circle at right center, #FB411C 0%, transparent 35%),
    //   linear-gradient(
    //     90deg,
    //     #050505 0%,
    //     #070707 35%,
    //     #0b0b0b 65%,
    //     #120404 85%,
    //     #1a0505 100%
    //   )
    // `,
    //   }}
    >
      {/* subtle overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
        radial-gradient(
          circle at 100% 50%,
          rgba(239, 68, 36, 0.18) 0%,
          rgba(239, 68, 36, 0.10) 12%,
          rgba(239, 68, 36, 0.05) 22%,
          rgba(0, 0, 0, 0) 38%
        )
      `,
        }}
      />

      <div className="relative max-w-[1520px] mx-auto px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-14 grid grid-cols-1 md:grid-cols-[280px_1fr_220px] gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* Column 1 */}
          <div className="pb-10 md:pb-0 md:pr-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6"
            >
              <Image
                src="/logo.png"
                alt="SportsBettingOnline"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </Link>

            <p className="text-[#b0b0b0] text-sm leading-7 max-w-[240px]">
              Excited to get started with your sports betting experience? Sports Betting
              Online offers an online gaming platform you&apos;ll love. We make the process
              easy, from the time you open your account to receiving your winnings in your
              account. Bet now on your favorite major league sports, including NFL betting,
              NHL, and more.
            </p>
          </div>

          {/* Column 2 */}
          <div className="py-10 md:py-0 md:px-12">
            <h3 className="text-white text-[20px] font-semibold mb-2">
              Info
            </h3>

            <div className="w-12 h-[2px] bg-red-600 mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10">
              <ul className="space-y-4">
                {infoCol1.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#b5b5b5] hover:text-white text-sm transition duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-4 mt-4 sm:mt-0">
                {infoCol2.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#b5b5b5] hover:text-white text-sm transition duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-4 mt-4 sm:mt-0">
                {infoCol3.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#b5b5b5] hover:text-white text-sm transition duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="pt-10 md:pt-0 md:pl-12 flex flex-col gap-8">
            <div>
              <h3 className="text-white text-[20px] font-semibold mb-2">
                Call Us
              </h3>

              <div className="w-12 h-[2px] bg-red-600 mb-4" />

              <a
                href="tel:8556048387"
                className="text-[#c2c2c2] hover:text-white text-sm"
              >
                855.G04.BETS
              </a>
            </div>

            <div>
              <h3 className="text-white text-[20px] font-semibold mb-2">
                Chat Us
              </h3>

              <div className="w-12 h-[2px] bg-red-600 mb-4" />

              <a
                href="tel:8002388514"
                className="text-[#c2c2c2] hover:text-white text-sm"
              >
                800.238.8514
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="
                w-10 h-10 rounded-full
                border border-white/20
                text-gray-300
                flex items-center justify-center
                hover:bg-red-600
                hover:border-red-600
                hover:text-white
                transition-all duration-300
              "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="py-6">
          <p className="text-[#8a8a8a] text-xs tracking-wide">
            © 2026 SPORTSBETTINGONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}
