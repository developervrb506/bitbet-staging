import ImageBackgroundTextSection, {
  type ImageBackgroundTextContent,
} from "@/components/ui/ImageBackgroundTextSection";


const featuresContent: ImageBackgroundTextContent = {
  backgroundImage: "/Basics-of-Horse-Betting.png",
  backgroundPosition: "center",
  heading: "Basics of",
  highlightedHeading: "Horse Betting",
  description: [
    "New to horse betting? We offer both basic and exotic bet offerings in our racebook. A basic win bet allows bettors to choose one horse to win the race. If you want to make it a bit more complex, choose a place bet, where you'll select one horse to win in either first or second place. You can also choose a show bet where you'll pick one horse to finish in first, second, or third places. By placing a show bet, you'll expand your odds of winning!",
    "For experienced horse bettors, betting on single-races or multi-races is also a fun way to bet. An exacta bet allows you to pick both a first and second-place winner, while other bets get even more complex. Whether you wish to keep it simple or more complex, SportsBettingOnline has a stake for everyone in our horse racebook",
  ],
};

export default function BasicsOfHorseBetting() {
  return <ImageBackgroundTextSection content={featuresContent} />;
}
 