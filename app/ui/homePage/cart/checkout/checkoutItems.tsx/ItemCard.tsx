import { CartItem } from '@/lib/definations';
import Image from 'next/image';
import React from 'react'

type Props = {}

const ItemCard = ({item}: {item: CartItem}) => {

    

  return (
        <div className='flex justify-between items-center gap-4 mb-4'>
            <div className='flex justify-start items-center gap-4'>
                <div className='relative'>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className='rounded-lg'
                />
                <div className='w-5 h-5 absolute -right-1 -top-2 bg-blackOverlay flex justify-center items-center rounded-full'>
                <p className='text-white text-[12px]'>{item.quantity}</p>
                </div>
                </div>
                <p className='text-gray-600 text-[14px]'>{item.title}</p>
            </div>
            <div>
                <p className='text-gray-700 text-[16px]'>Rs. {item.price}</p>
            </div>
        </div>
  )
}

export default ItemCard