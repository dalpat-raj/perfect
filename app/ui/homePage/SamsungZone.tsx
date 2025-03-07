import ProductSlider from '@/app/ui/SliderProduct/ProductSlider'
import { getProductByCollection } from '@/lib/data';
import Link from 'next/link';
import { caveat } from '@/app/ui/Fonts';

const SamsungZone = async() => {
    const products = await getProductByCollection("Samsung");
    
  return (
    products?.length >= 1 && (
      <div className='w-full py-8 max-sm:py-6 px-12 max-md:px-4 max-sm:px-2'>
        <div className='flex justify-between items-center mb-8 max-sm:mb-4'>
            <h2 className={`${caveat.className} text-[37px] font-bold max-sm:text-[24px]`}>Samsung Zone</h2>
            <button className='border border-gray-200 rounded-md px-3 py-2 text-[14px] font-semibold'><Link href={"/products"}>View More</Link></button>
        </div>
        <div>
          <ProductSlider products={products}/>
        </div>
    </div>
    )
  )
}

export default SamsungZone