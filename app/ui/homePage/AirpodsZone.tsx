import React from 'react'
import ProductSlider from '@/app/ui/SliderProduct/ProductSlider'
import { getProductByCollection } from '@/lib/data';
import Link from 'next/link';
import { caveat } from '@/app/ui/Fonts';

const AirpodsZone = async() => {
    const products = await getProductByCollection("AirPods");
    
  return (
    <div className='w-full py-8 max-sm:py-6 px-12 max-md:px-4 max-sm:px-2'>
        <div className='flex justify-between items-center mb-8 max-sm:mb-6'>
            <h2 className={`${caveat.className} text-[37px] font-bold max-sm:text-[24px]`}>AirPods Zone</h2>
            <button className='border border-gray-200 rounded-md px-3 py-2 text-[14px] font-semibold'><Link href={"/products/samsung"}>View More</Link></button>
        </div>
        <div>
          <ProductSlider products={products}/>
        </div>
    </div>
  )
}

export default AirpodsZone