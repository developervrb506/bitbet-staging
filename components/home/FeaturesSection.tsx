import ImageBackgroundTextSection, {
  type ImageBackgroundTextContent,
} from "@/components/ui/ImageBackgroundTextSection";


const featuresContent: ImageBackgroundTextContent = {
  backgroundImage: "/home-FeaturesSection.png",
  backgroundPosition: "center",
  heading: "Features of Our",
  highlightedHeading: "Online Casino",
  description: [
    "Still trying to figure out where to get started? Begin with our most popular and well-known service, known as our sportsbook. You'll find an online sports gambling experience that cannot be beaten in the sportsbook online betting. We offer many different types of sports betting, including straight bets, parlays, and teasers.",
    "With our live in-game betting options, you can bet for an eventful time throughout the game. Grab your friends and family and place your bets! Even better, our online casino never closes! Bet here any time of the day or night, 24/7/365. You'll always have something to do in our online casino!",
  ],
};

export default function FeaturesSection() {
  return <ImageBackgroundTextSection content={featuresContent} />;
}
 