import React from 'react'
import { UserOrders } from '@/lib/definations'
import Link from 'next/link'
import clsx from 'clsx';
import Image from 'next/image';
import {formatDate} from '@/lib/formDatePage'

type Props = {
  order: UserOrders
}

const OrderCard = ({order}: Props) => {
  
  return (
    <Link href={`/user/orders/${order.id}`}>
    <div className='w-full grid grid-cols-4 items-center max-sm:grid-cols-4 shadow-custom-shadow rounded-xl mb-4 px-2 py-2'>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600'>
            <Image
                src={order.items[0].image}
                alt={"order"}
                width={50}
                height={50}
            />
        </div>
        <div className='text-[14px] col-span-1 text-gray-600'>Rs. {order.totalAmount}</div>
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