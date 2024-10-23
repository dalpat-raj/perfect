import { useAppSelector } from '@/lib/store/hooks';
import React, { useEffect, useState } from 'react'

type Props = {}

const CheckoutPrice = ({subtotal}: {subtotal: number}) => {
    const {shippingPrice, totalPrice} = useAppSelector((state) => state.shippingPrice);
    const [shippingCost, setShippingCost] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(()=>{
        setShippingCost(shippingPrice && shippingPrice)
        setTotalCost(totalPrice && totalPrice)
    },[shippingPrice])
  return (
    <div className='mt-6'>
            <div className='flex justify-between items-center mb-2'>
                <p className='text-[15px] text-gray-700'>Subtotal</p>
                <p className='text-[15px] '>₹{subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center mb-2'>
                <p className='text-[15px] text-gray-700'>Shipping</p>
                <p className='text-[15px] text-gray-700'>{shippingCost ? `${shippingCost.toFixed(2)}` : "FREE"}</p>
            </div>
            <div className='flex justify-between items-center mb-3'>
                <div>
                <h2 className='text-[18px] font-bold text-gray-600'>Total</h2>
                <p className='text-[13px] leading-none text-gray-400'>Including ₹548.95 in taxes</p>
                </div>
                <div className='flex items-end gap-2'>
                    <small className='text-gray-500'>INR</small>
                    <h2>₹{totalCost ? totalCost.toFixed(2) : subtotal.toFixed(2)}</h2>
                </div>
            </div>
        </div>
  )
}

export default CheckoutPrice