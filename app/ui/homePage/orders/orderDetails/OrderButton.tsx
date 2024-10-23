'use client'
import {  User } from '@/lib/definations'
import React, { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { IoChatbubblesOutline } from "react-icons/io5"
import ReviewForm from './OrderReview'
import RingLoader from '@/app/ui/loader/RingLoader'

type Items = {
color: string,
id: number,
image: string,
model: string,
modelNumber: string,
orderId: number,
price: number,
productId: number,
quantity: number,
rating: number,
stock: number,
title: string,
}

type Props = {
  user: User | null;
  item: Items;
}

export const RatingButton = ({user, item}: Props) => {
  const [reviewBox, setReviewBox] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any[]>([]);  // State to store fetched reviews
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const fetchReviews = async () => {
    if (item?.id) {
      try {
        const response = await fetch(`/api/reviews?productId=${item.productId}`);
        const data = await response.json();
        setReviews(data); 
        setLoading(false);  
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false); 
      }
    }
  };

  // useEffect to fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    loading ? <RingLoader/> : (
      <div >
      <button onClick={()=>setReviewBox(!reviewBox)} className='flex gap-2 items-center text-[14px] py-1 text-[rgb(31,56,185)] font-semibold'><AiOutlineStar size={18}/> Rate & Review Product</button>
      <button className='flex gap-2 items-center text-[14px] py-1'><IoChatbubblesOutline size={18}/> Chat with us</button>

      {
          reviewBox && (
              <div className='h-[100vh] w-[100vw] fixed top-0 left-0 bg-blackOverlay z-50 flex justify-center items-center'>
                  <div className='bg-white h-[80vh] w-auto overflow-scroll no-scrollbar z-50'>
        
                    <ReviewForm setReviewBox={setReviewBox} user={user} item={item} reviews={reviews}/>
                  </div>
              </div>
          )
      }

     </div>
    )
  )
}

