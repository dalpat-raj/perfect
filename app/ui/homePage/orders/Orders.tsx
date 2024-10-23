import { getMyOrders } from '@/lib/data';
import { User, UserOrders } from '@/lib/definations';
import React from 'react'
import OrderCard from './OrderCard';
import { caveat } from '../../Fonts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

type Props = {}

const Orders = async(props: Props) => {
    const session = await auth();
    const user: User | any = session?.user

    if(!user){
        redirect('/sign-in')
    }
    const orders: UserOrders[] = await getMyOrders(user?.id);
    

  return (
    <div>
        <div className='mb-4'>
            <h2 className={`${caveat.className} text-[37px] text-center font-bold`}>My Orders</h2>
        </div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
        <div className='col-span-2 '>
            <div className='py-2 shadow-lg mb-4'>
                <div className='grid grid-cols-4  px-4'>
                    <div className='col-span-1 text-[14px] font-semibold'>Product</div>
                    <div className='col-span-1 text-[14px] font-semibold'>Price</div>
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
        <div className='col-span-1'>
            <div className='bg-gray-100'>
                <p>raj</p>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Orders