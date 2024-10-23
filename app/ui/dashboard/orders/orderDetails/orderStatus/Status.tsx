'use client'
import { orderStatusChange } from '@/action/order';
import { UserOrders } from '@/lib/definations'
import React, { useState } from 'react'


type Props = {
  order: UserOrders | null,
};

const Status = ({order}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget); 
    try {
      const data = await orderStatusChange(formData);
      if(data){
        setIsLoading(false) 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
    <div className='flex justify-center items-center max-sm:justify-start'>
        <form onSubmit={handleSubmit}>
            <div className='w-full'>
            <select name="status" className='bg-gray-100 focus:outline-0 py-1 px-4 text-[14px] font-semibold border border-gray-300 w-full rounded-lg mb-2'>
                <option value={order?.status}>{order?.status}</option>
                <option value="pickup">pickup</option>
                <option value="shipped">shipped</option>
                <option value="delivered">delivered</option>
                <option value="cancled">cancled</option>
                <option value="refunded">refunded</option>
            </select>
            <input 
            type="number" 
            name='id' 
            defaultValue={order?.id}
            className='hidden'
            />
            <button type='submit' className='bg-[#333] py-1 rounded-lg w-full text-white font-semibold'>{isLoading ? "Wait" : "Submit"}</button>
            </div>
        </form>
    </div>
  )
}

export default Status