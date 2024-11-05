import { currentUser, getMyOrders } from '@/lib/data';
import { UserOrders } from '@/lib/definations';
import React from 'react'
import OrderCard from './OrderCard';



const Orders = async() => {
    const user = await currentUser()
    
    const orders: UserOrders[] = await getMyOrders(user?.id as string);
    
  return (
    <div>
        <div className='py-2 shadow-lg mb-4'>
            <div className='grid grid-cols-4 max-sm:grid-cols-3 px-4'>
                <div className='col-span-1 text-[14px] font-semibold'>Product</div>
                <div className='col-span-1 text-[14px] font-semibold max-sm:hidden'>Price</div>
                <div className='col-span-1 text-[14px] font-semibold'>Date</div>
                <div className='col-span-1 text-[14px] font-semibold'>Status</div>
            </div>
        </div> 
        <div className='px-2'>
        {
            orders.map((item,i)=>(
                <OrderCard order={item} key={i}/>
            ))
            }
        </div>
    
    </div>
  )
}

export default Orders