import { getCoupons } from '@/lib/data';
import React from 'react'
import { caveat } from '../../Fonts';
import CouponCard from './couponCard';

type Props = {}

const Coupon = async(props: Props) => {
  const coupons = await getCoupons();

  return (
    <div className='p-4'>
      <div className='w-full'>
        <h2 className={`${caveat.className} text-center text-[37px] font-bold text-gray-700` }>Our Events</h2>
      </div>
      <div className='mt-8'>
        <div className='grid grid-cols-7 max-sm:grid-cols-4 gap-2 border-b border-gray-300 mb-4 pb-1 capitalize'>
          <h4 className='text-[14px] font-semibold '>Id</h4>
          <h4 className='text-[14px] font-semibold'>Code</h4>
          <h4 className='text-[14px] font-semibold max-sm:hidden'>discount</h4>
          <h4 className='text-[14px] font-semibold max-sm:hidden'>isActive</h4>
          <h4 className='text-[14px] font-semibold max-sm:hidden'>Start</h4>
          <h4 className='text-[14px] font-semibold max-sm:hidden'>End</h4>
          <h4 className='text-[14px] font-semibold '>Action</h4>
        </div>
        {
          coupons.map((item: any,i: any)=>(
            <CouponCard AllCoupons={item} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default Coupon