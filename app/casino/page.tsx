import BasicsOfHorseBetting from "@/components/casino/BasicsOfHorseBetting";
import Hero from "@/components/casino/Hero";
import MobileCasino from "@/components/casino/MobileCasino";
import RaceCalender from "@/components/casino/RaceCalender"
import WeareLeaders from "@/components/casino/WeareLeaders";

export default function Casino() {
    return (
        <>
            <Hero />
            <WeareLeaders/>
            <BasicsOfHorseBetting/>
            <MobileCasino/>
            <RaceCalender/>
        </>
    );
}
