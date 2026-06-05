import Image from "next/image";
import ImageTextSection from "./ImageTextSection";
import DecorativeEllipse from "./DecorativeEllipse";

const howItWorksCards = [
  {
    title: "Seeds",
    description:
      "The seeds are a series of numbers and letters that are used to generate the result of one game. The player (person at home) and the server (machine online) generate two separate seeds. The user seeds are revealed to the players while the server is kept hidden or encrypted.",
  },
  {
    title: "Hashing Functions",
    description:
      "The server seeds usea secure hashtag algorithm to create a hashed seed that is presented to the player. The process of hashing a seed requires encrypting the information to make it virtually impossible to read, decipher, or reverse engineer. Therefore, in essence making it real.",
  },
  {
    title: "Hashing Functions",
    description:
      "A nonce is an active integer that increases each time a player makes a bet. The nonce will start at 0 and increase by +1 for every bet that is made. The process is all completed before the user asks for a card, spins the reels or rolls the dice. The purpose of a nonce is to ensure the game is unpredictable and prevent a request from being repeated at the start of the game.",
  },
];

export default function ProvabilitySections() {
  return (
    <>
      <section className="relative w-full bg-black py-10 md:py-20 lg:py-32 text-white overflow-hidden md:overflow-visible">
        {/* Background Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-b from-[#EB6331]/0 to-[#EB6331] opacity-10 pointer-events-none z-0" />
        <DecorativeEllipse left="-247px" top="10%" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-32 relative z-10">
          <ImageTextSection
            imageSrc="/provability.png"
            imageAlt="Provable Fairness Explanation"
            title={<>Online Casino Software Provable Fairness - Explanation</>}
            paragraphs={[
              "Provable fairness was created to address the lack of transparency that exists within online casino software. It creates the ability to give assurance to the player that the result matches a complex random number generator.",
              "Often, casino software providers lack transparency and do not show proof that their gambling games will payout the correct amount based on the casino set hold%. Online casino software providers in the market will often pay other websites to announce they are provably fair rather than allowing the player to ensure it on their own while they play.",
              "A good example in the common world would be an open-air kitchen in a restaurant. A closed door does not allow the customer to see that the food is being prepared properly and according to health regulations. An open-air visible kitchen solves that dilemma. It allows the casual diner to view the food prep and cleanliness of their food as it is being cooked before it is served.",
            ]}
          />

          {/* Section 2: How does it work? */}
          <div className="flex flex-col items-center text-center  space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-[46px] font-bold font-sora text-white">
                How does it work?
              </h2>
              <p className="text-white/80 font-sora text-sm md:text-base leading-relaxed ">
                All online casino games use or a multiple of unique RNG's
                (random number generators) that are the backbone of each
                individual game. The RNG's decide the order of the cards dealt,
                which number the spinning ball will land and where the dice will
                land etc. In order to understand the RNG process better, let's
                explain the different components of the casino provability
                algorithm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
              {howItWorksCards.map((card, index) => (
                <div
                  key={index}
                  className="p-8 border border-white/5"
                  style={{
                    background:
                      "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    backdropFilter: "blur(11.3px)",
                    borderRadius: "15px",
                  }}
                >
                  <h3 className="text-2xl font-bold font-sora text-white mb-5">
                    {card.title}
                  </h3>
                  <p className="text-white/80 font-sora text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black py-16 md:py-24 text-white overflow-hidden md:overflow-visible">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <ImageTextSection
            imageSrc="/whyprovability.png"
            imageAlt="Why Provability"
            title="Why does this process ensure the game is provably fair?"
            paragraphs={[
              "The seeds from the player and user are present and the system combines the two to create a value that translates into one of the many results of thegambling game.",
              "However, it is important to note that the server seed is kept a secret to the player since the sequence is hashed or encrypted.",
              "The player though can run the hashed seed along with the player seed to check and ensure the value it generates is the same as the one produced in one game. The player then knows that the hashed seed has not tampered with the server seed and the result of the provably fair game is genuine.",
            ]}
            imagePosition="right"
          />
        </div>
      </section>
    </>
  );
}
