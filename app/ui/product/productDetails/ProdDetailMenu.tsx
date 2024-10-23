"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import ProductReview from './ProductReview';
import { Product, User } from '@/lib/definations';
import Rating from '../../rating/Rating';

const ProdDetailMenu = (
    {user, product}
    : {
        user: User | any,
        product: Product, 
    }) => {
    
    const [descShow, setDescShow] = useState<boolean>(false)
    const [reviewShow, setReviewShow] = useState<boolean>(false)
    const [shippingShow, setShippingShow] = useState<boolean>(false)
    const [cancleShow, setCancleShow] = useState<boolean>(false)

  return (
    <>
    <div className='mt-4'>

        <div className='my-4 border-b border-gray-300'>
        <div onClick={()=>setDescShow(!descShow)} className='py-4 flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Description</h6>
            <div className={descShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={descShow ? "transition duration-500 ease-in opacity-100" : "opacity-0 absolute top-0 right-0"}>
            <div className='text-[14px] font-semibold'>{product?.description}</div>
            <div className='py-6'>
                <h4 className='text-[13px] uppercase font-extrabold pb-4'>Feature</h4>
                <ul className='pl-4 text-[14px] font-semibold'>
                    {
                        product?.feature?.map((item, i)=>(
                            <li className='list-disc' key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </div>

        <div className='my-4 border-b border-gray-300'>
            <div onClick={()=>setReviewShow(!reviewShow)} className='py-4 flex justify-between items-center cursor-pointer'>
                <h6 className='text-[13px] uppercase font-extrabold'>Reviews <span><Rating rating={product?.rating}/></span></h6>
                <div className={reviewShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
            </div>
            <div className={reviewShow ? "transition duration-500 ease-in opacity-100" : "opacity-0 absolute top-0 right-0"}>
                
            <ProductReview user={user} product={product}/>
            
            </div>
        </div>

        <div className='my-4 border-b border-gray-300'>
        <div onClick={()=>setShippingShow(!shippingShow)} className='py-4 flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Shipping Information</h6>
            <div className={shippingShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={shippingShow ? "transition duration-500 ease-in opacity-100" : "opacity-0 absolute top-0 right-0"}>
            <div className='mb-4 text-[14px] text-gray-600'>
                <p>Shipping Fee:</p>
                <p className='my-2'>Free Shipping on prepaid orders.</p>
                <p>₹99 COD Charges on all Cash on Delivery orders.</p>
            </div>
        </div>
        </div>

        <div className='my-4 border-b border-gray-300'>
        <div onClick={()=>setCancleShow(!cancleShow)} className='py-4 flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Cancellation</h6>
            <div className={cancleShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={cancleShow ? "transition duration-500 ease-in opacity-100" : "opacity-0 absolute top-0 right-0"}>
            
        </div>
        </div>

    </div>
    </>
  )
}

export default ProdDetailMenu