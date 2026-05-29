import BasicsOfHorseBetting from "@/components/racebook/BasicsOfHorseBetting";
import GiveHorseBetting from "@/components/racebook/GiveHorseBetting";
import Hero from "@/components/racebook/Hero";
import RacebookBetting from "@/components/racebook/RacebookBetting";
import RaceCalender from "@/components/racebook/RaceCalender";
import TodaysRaces from "@/components/racebook/TodaysRaces";
import WeareLeaders from "@/components/racebook/WeareLeaders";

export default function RaceBook() {
    return (
        <>
            <Hero />
            <TodaysRaces/>
            <RaceCalender/>
            <RacebookBetting/>
            <WeareLeaders/>
            <BasicsOfHorseBetting/>
            <GiveHorseBetting/>
        </>
    );
}
