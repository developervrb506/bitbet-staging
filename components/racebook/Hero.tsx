import HeroSection, {
  type HeroButton,
  type HeroSectionContent,
  type HeroTrustBadge,
} from "@/components/ui/HeroSection";

const homeHeroButtons: HeroButton[] = [
  { label: "Join Now", href: "#", variant: "primary" },
];

const homeHeroTrustBadges: HeroTrustBadge[] = [
  {
    label: "24/7 Live Betting",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    label: "Instant Crypto Withdrawals",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    label: "Secure Platform",
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const homeHeroContent: HeroSectionContent = {
  bgImage: "/racebook-hero.png",
  bgPosition: "center center",
  title: "BET ON THE TRACKS!",
  // subtitle: "WIN BIGGER.",
  description: [
    { text: "10% Signup Bonus (No rollover) + 10% Reload Bonus (No rollover) + 10% Cashback Weekly on your Win or Loss (No rollover)" },
    { text: "No Rollovers. No Bullsh$t." },
    { text: "Only at Sportsbettingonline.ag"},
    { text: "Your winning streak starts here!"},

  ],
  buttons: homeHeroButtons,
  trustBadges: homeHeroTrustBadges,
  showButtons: true,
  showTrustBadges: false,
  showBottomFade: true,
};

export default function Hero() {
  return <HeroSection content={homeHeroContent} />;
}
