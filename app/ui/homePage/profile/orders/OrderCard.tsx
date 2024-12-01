"use client"
import React, { useState } from 'react'
import { UserOrders } from '@/lib/definations'
import Link from 'next/link'
import clsx from 'clsx';
import Image from 'next/image';
import { ImageSkeleton } from '@/app/ui/skeletons';
import { formatDate } from '@/lib/helpers';

type Props = {
  order: UserOrders
}

const OrderCard: React.FC<Props> = ({order}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const image1 = order?.items[0]?.image;
  
  return (
    <Link href={`/profile/orders/${order.id}`}>
    <div className='w-full grid grid-cols-4 items-center max-sm:grid-cols-4 shadow-custom-shadow rounded-xl mb-4 px-2 py-2'>
        <div className='col-span-1 w-[50px] h-[60px]'>
        {imageLoading && <ImageSkeleton/>}
          <Image
            src={image1}
            alt={"order"}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: '100%', height: '100%', objectFit: 'cover' }}
            onLoad={()=>setImageLoading(false)}
          />
        </div>
        <div className='text-[14px] col-span-1 text-gray-600 max-sm:hidden'>Rs. {order.totalAmount}</div>
        <div className='text-[14px] col-span-1 text-gray-600'>{formatDate(order.createdAt)}</div>
        <div  className={clsx(
        "text-[14px] col-span-1 text-gray-600 flex justify-center items-center",
        order.status === "Order Confirmed" && "w-max bg-green-100 py-1 px-4 rounded-lg font-semibold",   
        order.status === "pickup" && "w-max bg-gray-100 py-1 px-4 rounded-lg font-semibold",   
        order.status === "shipped" && "w-max bg-green-100 py-1 px-4 rounded-lg font-semibold",   
        order.status === "delivered" && "w-max bg-green-100 py-[1px] px-4 rounded-lg font-semibold text-green-800",   
        order.status === "cancled" && "w-max bg-red-100 py-1 px-4 rounded-lg font-semibold text-red-800",   
        order.status === "refunded" && "w-max bg-yellow-100 py-1 px-4 rounded-lg font-semibold text-yellow-600",   
      )}>
        {order.status}
        </div>
    </div>
    </Link>
  )
}

export default OrderCard