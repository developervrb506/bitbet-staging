import type { Metadata } from "next";
import { Geist, Geist_Mono, Antonio, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SportsBettingOnline — Bet Smarter, Win Bigger",
  description:
    "The premier online sportsbook. Bet on NFL, NBA, MLB, soccer, and more. Live odds, fast payouts, and player-focused sports betting.",
  icons: {
    icon: "/favIcon.png",
    shortcut: "/favIcon.png",
    apple: "/favIcon.png",
  },
  keywords: [
    "sports betting",
    "online sportsbook",
    "live betting",
    "NFL betting",
    "NBA betting",
    "casino",
    "racebook",
  ],
  openGraph: {
    title: "SportsBettingOnline — Bet Smarter, Win Bigger",
    description: "The premier online sportsbook. Live odds, fast payouts.",
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
      className={`${inter.variable} ${geistMono.variable} ${antonio.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {/* Top header: logo + login form — sticky */}
        <Header />
        <main className="flex-1">
          {/* Nav strip overlays the hero below it */}
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
