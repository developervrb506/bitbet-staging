import ImageBackgroundTextSection, {
  type ImageBackgroundTextContent,
} from "@/components/ui/ImageBackgroundTextSection";


const featuresContent: ImageBackgroundTextContent = {
  backgroundImage: "/Basics-of-Horse-Betting.png",
  backgroundPosition: "center",
  heading: "Our Online Casino",
  highlightedHeading: "Game Offerings",
  description: [
    "Forgot your details? Not a member yet? Join Now",
    "There's no better place to enjoy all of your favourite casino games online than SportsBettingOnline. Our online slot games feature a wide range of minimum and maximum bet amounts, allowing you to adjust your wager based on your preferences. The online casino is perfect if you need a break from sports betting! Play classic games with fun themes such as the Jurassic Fire Slots or the Wild 7's Slots. If slots aren't your thing, check out the table game options such as Craps, Baccarat, and other favourites!",
    "We even offer video poker options in wide varieties and video bingo. You'll always have new games to try when you visit our online casino. Our simulated blackjack tables online function just like a real blackjack table at the casino! Aim to get as close to 21 as possible, but don't go over! You'll have a blast enjoying your favourite games, like Blackjack, from the comfort of your own home. Even better, you can visit the online casino while also involved in live sports betting.",
  ],
};

export default function BasicsOfHorseBetting() {
  return <ImageBackgroundTextSection content={featuresContent} />;
}
 