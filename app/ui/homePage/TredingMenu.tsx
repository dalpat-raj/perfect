import React, { useState } from 'react'


interface CollectionProps {
  setCollection: React.Dispatch<React.SetStateAction<string>>;
}

const TredingMenu = ({setCollection}: CollectionProps) => {
  
    const [active, setActive] = useState<Number>(1)
  return (
    <div className='w-full flex items-center justify-center gap-12 max-sm:gap-4 m-auto mb-4'>
          <button onClick={()=>{setActive(1); setCollection('iPhone')}} className={active === 1 ? "text-[15px] font-bold" : "text-[14px]"}>Apple</button>
          <button onClick={()=>{setActive(2); setCollection('Samsung')}} className={active === 2 ? "text-[15px] font-bold" : "text-[14px]"}>Samsung</button>
          <button onClick={()=>{setActive(3); setCollection('Oppo')}} className={active === 3 ? "text-[15px] font-bold" : "text-[14px]"}>Oppo</button>
          <button onClick={()=>{setActive(4); setCollection('Vivo')}} className={active === 4 ? "text-[15px] font-bold" : "text-[14px]"}>Vivo</button>
          <button onClick={()=>{setActive(5); setCollection('Redmi')}} className={active === 5 ? "text-[15px] font-bold" : "text-[14px]"}>Redmi</button>
          <button onClick={()=>{setActive(6); setCollection('AirPods')}} className={active === 6 ? "text-[15px] font-bold" : "text-[14px]"}>AirPods</button>
        </div>
  )
}

export default TredingMenu