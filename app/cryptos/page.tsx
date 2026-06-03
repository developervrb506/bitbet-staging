import DecorativeEllipse from "@/components/DecorativeEllipse";
import Hero from "@/components/Hero";
import ImageTextSection from "@/components/ImageTextSection";
import CryptoCards from "@/components/CryptoCards";

export default function CryptosPage() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Hero
          backgroundImage="/cryptos.png"
          title="Cryptos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris sit amet nisi interdum vestibulum iaculis mattis arcu. Cras imperdiet ipsum at metus varius"
        />
        <section className="relative w-full bg-black py-16 md:py-32 text-white overflow-hidden md:overflow-visible">
          <DecorativeEllipse left="-247px" top="10%" />
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
            <ImageTextSection
              imageSrc="/provability.png"
              imageAlt="Accepted crypto casino currencies at Bitbet.com"
              title={
                <>
                  Accepted crypto
                  <br />
                  casino currencies at
                  <br />
                  Bitbet.com
                </>
              }
              paragraphs={[
                "The crypto betting currencies below are all accepted at bitbet.com. When you send any of the currencies including BTC your money will be converted to microbitcoin (MBT) which is 1/10 of a bitcoin at the current market value. You can choose to convert your money back to any of the currencies below on your payout as well after you win.",
                "Bitbet.com accepts all of the betting crypto currencies listed below. When you fund with any of the crypto currencies listed below (including BTC) will be converted to USD at the current market value. Once you win at the casino, you have the option of changing your funds back into any of the currencies listed below to cash out your money.",
              ]}
            />
            <CryptoCards />
          </div>
        </section>
      </div>
    </main>
  );
}
