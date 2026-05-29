import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a0000 40%, #2d0000 70%, #0a0a0a 100%)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(211,47,47,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#d32f2f]/20 border border-[#d32f2f]/40 text-[#ef5350] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#d32f2f] rounded-full animate-pulse" />
          Join Thousands of Winners
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] mb-6">
          Ready to{" "}
          <span className="text-gradient-red">Start Winning?</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Sign up in minutes, claim your welcome bonus, and start betting on all
          your favorite sports today. No complicated requirements.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Create Free Account
          </Button>
          <Button variant="outline" size="lg">
            View All Sports
          </Button>
        </div>

        <p className="mt-6 text-gray-600 text-xs">
          18+ only. Gambling can be addictive. Play responsibly.{" "}
          <a href="/responsible-gambling" className="underline hover:text-gray-400 transition-colors">
            Learn about responsible gambling.
          </a>
        </p>
      </div>
    </section>
  );
}
