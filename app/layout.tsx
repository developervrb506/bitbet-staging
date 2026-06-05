import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingNav from "@/components/layout/FloatingNav";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitbet — The Best Crypto Casino",
  description:
    "The premier online crypto casino. Play blackjack, roulette, slots, and more with Bitcoin. Enjoy live odds, fast payouts, and a top-tier betting experience.",
  keywords: [
    "crypto casino",
    "bitcoin casino",
    "online casino",
    "live betting",
    "slots",
    "blackjack",
    "roulette",
  ],
  openGraph: {
    title: "Bitbet — The Best Crypto Casino",
    description:
      "The premier online crypto casino. Play with Bitcoin for fast payouts and a great betting experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${montserrat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body>
        <ScrollToTop />
        <Header />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}
