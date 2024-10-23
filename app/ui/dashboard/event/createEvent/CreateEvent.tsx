'use client';
import Label from '@/app/ui/label/Label';
import React, { useState } from 'react';
import { DatePickerDemo } from './DateSelect';
import { eventAdd } from '@/action/event';
import LoaderBall from '@/app/ui/loader/BallLoader';

type Props = {};

const CreateEvent = (props: Props) => {
  const [endDate, setEndDate] = React.useState<Date | any>();
  const [productId, setProductId] = React.useState<number | ''>(''); 
  const [products, setProducts] = React.useState<number[]>([]); 
  const [loading, setLoading] = useState<boolean>(false)

  const handleAddProduct = () => {
    if (productId && !products.includes(Number(productId))) {
      setProducts((prev) => [...prev, Number(productId)]);
      setProductId(''); 
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setLoading(true)
    const formData = new FormData(event.currentTarget); 
    try {
      const eventAddAction = eventAdd.bind(null, products, endDate);
      const data = await eventAddAction(formData);     
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setProducts([])
      setLoading(false)
    }
  };

  if(loading){
    return <LoaderBall/>
  }

  return (
    <div className='flex justify-center items-center my-4 max-sm:my-0'>
      <div className='w-1/2 max-sm:w-full border border-gray-200 p-4 px-8 max-sm:p-4 rounded-lg max-sm:border-0'>
        <div className='text-center mb-8'>
          <h2 className='text-[27px] font-bold'>Create Events</h2>
        </div>

        <div className=''>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <Label htmlFor="title" title="Name" />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                required
              />
            </div>
            <div className='mb-4'>
              <Label htmlFor="desc" title="Description" />
              <textarea 
                id="desc"
                name="description" 
                required
                rows={4}
                placeholder='Type your good description!'
                className='w-full text-[14px] font-normal py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400'
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
              <div>
                <Label htmlFor="title" title="End Date" />
                <DatePickerDemo date={endDate} setDate={setEndDate} />
              </div>
            </div>

            {/* Input for Product ID */}
            <div className='mb-4'>
              <Label htmlFor="prodId" title="Select Product" />
              <div className='flex gap-2'>
                <input
                  type="number"
                  id="prodId"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="Product ID"
                  className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                />
                <button type='button' onClick={handleAddProduct} className='bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-black transition'>
                  Add
                </button>
              </div>
              {products.length > 0 && (
                <div className='mt-2 border border-gray-200 p-4'>
                  <p className='text-[14px]'>Selected Products: ID</p>
                  <ul className='flex gap-2'>
                    {products.map((id) => (
                      <li className='text-[13px]' key={id}>{id}</li>
                    ))}
                  </ul>
                </div>
              )}
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

export default CreateEvent;
