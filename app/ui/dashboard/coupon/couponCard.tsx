import { AllCouponData } from '@/lib/definations'
import { formatDate } from '@/lib/formDatePage';
import React from 'react'

type Props = {}

const CouponCard = ({AllCoupons}: {AllCoupons: AllCouponData }) => {
    
  return (
    <div className='border border-gray-200 mb-4 p-2 rounded-md'>
        <div className='w-full grid grid-cols-7 max-sm:grid-cols-4 gap-2'>
            <div className=''>
                <p className='text-[13px] text-gray-900'>#{AllCoupons.id}</p>
            </div>
            <div className=''>
                <p className='text-[14px] text-gray-800'>{AllCoupons.code}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700'>{AllCoupons.discount}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{formatDate(AllCoupons.isActive)}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{formatDate(AllCoupons.createdAt)}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{formatDate(AllCoupons.expirationDate)}</p>
            </div>
            <div className=''>
                <button className='text-[13px] text-white bg-blackOverlay py-1 px-4 rounded-sm'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CouponCard