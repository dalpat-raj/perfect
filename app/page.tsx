import dynamic from "next/dynamic";                 
import { CollectionsHomeSkeletons, ProductSliderSkeleton, TradingCoverSkeletons } from "@/app/ui/skeletons";
import Event from "@/app/ui/homePage/event/Event";
import HomeSlider from "@/app/ui/homePage/HomeSlider";
const SamsungZone = dynamic(()=> import("@/app/ui/homePage/SamsungZone"), {loading:()=><ProductSliderSkeleton/>})
const AirpodsZone = dynamic(()=> import("@/app/ui/homePage/AirpodsZone"), {loading:()=><ProductSliderSkeleton/>})
const IphoneZone = dynamic(()=> import("@/app/ui/homePage/IphoneZone"), {loading:()=><ProductSliderSkeleton/>})
const TradingCover = dynamic(()=> import("@/app/ui/homePage/TradingCover"), {loading: ()=><TradingCoverSkeletons/>})
const Collections = dynamic(()=> import("@/app/ui/collections/Collections"), {loading: ()=> <CollectionsHomeSkeletons/>})


export default function Home() {
  
  return (
    <div className="">
      <HomeSlider/>
      <SamsungZone/>
      <AirpodsZone/>
      <IphoneZone/>

      <TradingCover/>
      <Collections/>
      <Event/>
    </div>

  );
}
