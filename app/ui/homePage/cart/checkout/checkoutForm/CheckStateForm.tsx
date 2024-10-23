import { CartItem } from '@/lib/definations'
import { setShippingPrice } from '@/lib/store/features/shipping/ShippingSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import React from 'react'

type Props = {}

const CheckStateForm = (props: Props) => {
    const cart: CartItem[] = useAppSelector((state) => state.cart.items);



    const dispatch = useAppDispatch();
    
    const ShippingPriceHandler = (value: string) => {
        const totalShippingPrice = cart?.reduce((acc: number, curr: CartItem) => {
          return acc + curr.price; 
        }, 0); 

        const data = {
            totalShippingPrice: totalShippingPrice,
            type: value,
        }
        dispatch(setShippingPrice(data))
      };

  return (
    <>
          {/* Payment Section */}
          <h2 className="text-[18px] font-semibold mb-4">Payment</h2>
          <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
          <div className="mb-6">
            <div className="flex items-center border border-gray-200 py-3 px-2 rounded-lg shadow-sm">
              <input
                type="radio"
                id="razorpay"
                name="paymentMethod"
                value="pay"
                // onChange={()=>ShippingPriceHandler("pay")}
                onChange={(e) => ShippingPriceHandler(e.target.value)}
                defaultChecked
                className="h-4 w-4 text-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="razorpay" className="ml-2 block text-sm text-gray-900">
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </label>
              <div className="ml-4">
                {/* Icons for payment options */}
                <img
                  src="/path-to-your-icons.png"
                  alt="Payment Options"
                  className="inline-block h-6"
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-200 py-3 px-2 rounded-lg shadow-sm">
              <input
                type="radio"
                id="codPayment"
                name="paymentMethod"
                value="cash"
                onChange={(e) => ShippingPriceHandler(e.target.value)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="codPayment" className="ml-2 block text-sm text-gray-900">
                Cash on Delivery (COD)
              </label>
            </div>
            </div>
    </>
  )
}

export default CheckStateForm