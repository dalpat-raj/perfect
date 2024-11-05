import { UserOrders } from '@/lib/definations'
import Image from 'next/image'
import React from 'react'

type Props = {
  order: UserOrders | null,
}

const Items = ({order}: Props) => {
  const items = order?.items;
  return (
    <div>
        <div className='border-b border-gray-300 grid grid-cols-6 max-sm:grid-cols-4 gap-2 pb-2'>
            <p className='text-[14px] font-semibold text-gray-700'>Items Summary</p>
            <p className='text-[14px] font-semibold text-gray-700 max-sm:hidden'>Model</p>
            <p className='text-[14px] font-semibold text-gray-700'>Model Number</p>
            <p className='text-[14px] font-semibold text-gray-700'>Quantity</p>
            <p className='text-[14px] font-semibold text-gray-700 max-sm:hidden'>Price</p>
            <p className='text-[14px] font-semibold text-gray-700'>Total Price</p>
        </div>
        {
          items?.map((item,i)=>(
            <div key={i} className='grid grid-cols-6 max-sm:grid-cols-4  items-center gap-2 py-2 border-b border-gray-300'>
            <div className='flex gap-2'>
              <div className='max-md:hidden'>
                <Image
                src={item.image}
                alt={item.title}
                width={0}
                height={0}
                sizes='100vw'
                style={{width:'50px', height: '50px', objectFit: 'cover'}}
                />
              </div>
                <p className='text-[14px] text-gray-500'>{item.title}</p>
            </div>
            <div className='text-[15px] text-gray-600 max-sm:hidden'><p>{item.model}</p></div>
            <div className='text-[15px] text-gray-600'><p>{item.modelNumber}</p></div>
            <div className='text-[15px] text-gray-600'><p>{item.quantity}</p></div>
            <div className='text-[15px] text-gray-600 max-sm:hidden'><p>RS. {item.price.toFixed(2)}</p></div>
            <div className='text-[16px] text-gray-600 font-bold'><p>RS. {(item.price * item.quantity).toFixed(2)}</p></div>
          </div>
          ))
        }

    </div>
  )
}

export default Items