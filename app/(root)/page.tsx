import Event from "../ui/homePage/event/Event";
import HomeSlider from "../ui/homePage/HomeSlider";
import TradingCover from "../ui/homePage/TradingCover";
import { Suspense } from "react";
import { CollectionsHomeSkeletons, CollectionsSkeletons, TradingCoverSkeletons } from "../ui/skeletons";
import Collections from "../ui/collections/Collections";
import { AppProps } from "next/app";
import IphoneZone from "../ui/homePage/IphoneZone";

export default function Home() {
  
  return (
    <div className="">
      <HomeSlider/>

      <Suspense fallback={<TradingCoverSkeletons/>}> 
        <TradingCover/>
      </Suspense>

      {/* <Event/> */}

      <div className='w-full my-8 max-md:my-8 max-sd:my-4 px-12 max-md:px-4 max-sm:px-2'>
        <Suspense fallback={<CollectionsHomeSkeletons/>}>
          <Collections/>
        </Suspense>
      </div>
      <IphoneZone/>
    </div>

  );
}
