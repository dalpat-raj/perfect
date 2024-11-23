"use client"
import { AllCouponData } from '@/lib/definations'
import { formatDate } from '@/lib/helpers'
import React, { useState } from 'react'
import ButtonWithSpinner from '@/app/ui/button/ButtonWithSpinner';
import { deleteCoupon } from '@/action/coupon';
import { toast } from 'sonner';

type CouponProps = {
    AllCoupons: AllCouponData;
}

const CouponCard: React.FC<CouponProps> = ({AllCoupons}) => {
    const [loading, setLoading] = useState(false)

    const handleDelete=async(e: React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);
        const res = await deleteCoupon(AllCoupons?.id)
        if(res?.success){
            setLoading(false)
            toast.success(res.success)
        }else {
            setLoading(false)
            if(res?.error) toast.success(res.error)
        }
    }
    
  return (
    <div className='border border-gray-200 mb-4 p-2 rounded-md'>
        <div className='w-full grid grid-cols-7 max-sm:grid-cols-4 gap-2'>
            <div className=''>
                <p className='text-[13px] text-gray-900'>#{AllCoupons.id}</p>
            </div>
            <div className=''>
                <p className='text-[14px] font-semibold text-gray-800'>{AllCoupons.code}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700'>{AllCoupons.discount} %</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{AllCoupons.isActive ? "Active" : "Off"}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{formatDate(AllCoupons.createdAt)}</p>
            </div>
            <div className='max-sm:hidden'>
                <p className='text-[13px] text-gray-700 max-sm:hidden'>{formatDate(AllCoupons.expirationDate)}</p>
            </div>
            <div className='w-full'>
            <form onSubmit={handleDelete}>
            
                <div className='w-2/3 h-8'>
                    <ButtonWithSpinner loading={loading}>
                        Delete
                    </ButtonWithSpinner>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CouponCard