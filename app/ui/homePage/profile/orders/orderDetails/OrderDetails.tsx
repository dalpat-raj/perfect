import { getOrderDetails } from '@/lib/data'
import React from 'react'
import Image from 'next/image';
import { RatingButton } from './OrderButton';
import OrderStatus from './OrderStatus';
import { TbFileInvoice } from 'react-icons/tb';
import { formatDate } from '@/lib/helpers';

const OrderDetails = async({id}: {id: number}) => {
    const {order, address} = await getOrderDetails(id);    
    
    const {completeAddress, nearbyLandmark, city, pinCode, state, phone} = address ?? {} ;
    
 

  return (
    <div className='max-sm:px-0'>
        <div className='flex flex-col gap-6'>

            <div className='bg-white grid grid-cols-3 max-md:grid-cols-1 shadow-custom-shadow'>
                <div className='col-span-1 p-6 border-r border-gray-100'>
                    <h2 className='text-[18px] capitalize font-bold'>Delivery Adderss</h2>
                    <p className='text-[16px] font-semibold py-2'>{order?.user?.name}</p>
                    <p className='text-[15px] text-gray-600'>{completeAddress +" "+ nearbyLandmark +" "+ city} - {pinCode+" "+state}</p>
                    <div className='text-[15px] font-semibold pt-2'>Phone number <span className='text-gray-600 font-normal'>{phone}</span></div>
                </div>
                <div className='col-span-1 p-6 border-r border-gray-100'>
                    <h2 className='text-[18px] capitalize font-bold'>Amount</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-semibold'>Date -</p>
                        <p className='text-[13px] text-gray-700 py-1'>{formatDate(order?.createdAt)}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-semibold'>Time -</p>
                        <p className='text-[13px] text-gray-700 py-1'>{order?.createdAt.toLocaleTimeString()}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-semibold'>Subtotal -</p>
                        <p className='text-[13px] text-gray-700 py-1'>₹ {order?.subTotal}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-semibold'>Shipping Charge -</p>
                        <p className='text-[13px] text-gray-700 py-1'>₹ {order?.shippingCharge}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[16px] font-bold'>Total</p>
                        <p className='text-14px text-gray-800 font-semibold'>₹ {order?.totalAmount}</p>
                    </div>
                </div>
                <div className='col-span-1 p-6'>
                    <h2 className='text-[18px] capitalize font-bold'>More actions</h2>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center gap-2'><TbFileInvoice size={20}/> Download Invoice</div>
                        <button className='bg-[#333] py-1 px-4 text-gray-100'>Download</button>
                    </div>
                </div>
            </div>

            {
                order?.items.map((item, i)=>(
                    <div className='bg-white grid grid-cols-4 max-md:grid-cols-1 shadow-custom-shadow' key={i}>
                        <div className='col-span-1 p-6 flex gap-2'>
                            <div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p className='text-[12px] text-gray-500'>{item?.color}</p>
                                <p className='text-[12px] text-gray-500'>{item.model}</p>
                                <p className='text-[15px] font-semibold'>₹{item.price}</p>
                            </div>
                        </div>
                        <div className='col-span-2 p-6'>
                            <OrderStatus statusHistory={order.statusHistory}/>
                        </div>
                        <div className='col-span-1 p-6'>
                            <RatingButton user={order?.user} item={item}/> 
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default OrderDetails