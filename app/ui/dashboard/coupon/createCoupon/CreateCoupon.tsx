'use client';
import Label from '@/app/ui/label/Label';
import React, { useState } from 'react';
import { DatePickerDemo } from '@/app/ui/dashboard/event/createEvent/DateSelect';
import LoaderBall from '@/app/ui/loader/BallLoader';
import { couponAdd } from '@/action/coupon';

type Props = {};

const CreateCoupon = (props: Props) => {
  const [expirationDate, setExpirationDate] = React.useState<Date | any>();
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setLoading(true)
    const formData = new FormData(event.currentTarget); 
    try {
      const couponAddAction = couponAdd.bind(null, expirationDate);
      const data = await couponAddAction(formData);     
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
        setExpirationDate('')
      setLoading(false)
      alert("coupon created")
    }
  };

  if(loading){
    return <LoaderBall/>
  }

  return (
    <div className='flex justify-center items-center my-4 max-sm:my-0'>
      <div className='w-1/2 max-sm:w-full border border-gray-200 p-4 px-8 max-sm:p-4 rounded-lg max-sm:border-0'>
        <div className='text-center mb-8'>
          <h2 className='text-[27px] font-bold'>Create Coupon</h2>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <Label htmlFor="code" title="Code" />
              <input
                type="text"
                id="code"
                name="code"
                placeholder="Type code in capital"
                className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                required
              />
            </div>
            
            <div className='flex items-center gap-4 mb-4'>
              <div className=''>
                <Label htmlFor="disc" title="Discount" />
                <input
                  type="number"
                  id="disc"
                  name="discount"
                  placeholder="Discount"
                  className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                  required
                />
              </div>
              <div className='w-full'>
                <Label htmlFor="title" title="End Date" />
                <DatePickerDemo date={expirationDate} setDate={setExpirationDate} />
              </div>
            </div>

            <div className='mt-4'>
              <button type='submit' className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-black transition">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;
