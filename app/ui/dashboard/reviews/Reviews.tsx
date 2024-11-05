"use client"
import React, { useState } from 'react'
import Rating from '../../rating/Rating'
import { Review } from '@/lib/definations'
import { adminReviewDelete } from '@/action/reviews'
import { formatDate } from '@/lib/helpers'
import { toast } from 'sonner'
import LoaderBall from '@/app/ui/loader/BallLoader'


const ReviewsUi = ({reviews}: {reviews: Review[]}) => {
    const [loading, setLoading] = useState(false)

    const handleDelete = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setLoading(true)
        const formData = new FormData(e.currentTarget);
        const res = await adminReviewDelete(formData)
        if(res.success){
            setLoading(false)
            toast.success(res.success)
        }else {
            setLoading(false)
            if(res.error) toast.success(res.error)
        }
    }

    if(loading){
        return (
            <LoaderBall/>
        )
    }

    return (
        <div className='p-4 mt-4'>
            {
            reviews?.map((item, i) => (
                <div className='mb-6 border-b border-gray-100 pb-4' key={i}>
                    <div className='flex justify-between'>
                        <div className='flex justify-start items-center bg-gray-200 w-max pr-6 rounded-lg gap-1'>
                            <div className='w-6 h-6 rounded-full bg-green-500 flex justify-center items-center p-1 text-[16px] text-white font-bold'>{item.name.slice(0, 1)}</div>
                            <p className='text-[14px]'>{item.name}</p>
                        </div>

                        <div className='flex justify-center items-center gap-2 text-[12px] text-gray-400'>
                            <p>{formatDate(item.createdAt)}</p>
                            <p>{item.createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                        </div>

                        <div>
                            <form onSubmit={handleDelete}>
                                <input type="text" readOnly name='id' value={item.id} className='hidden' />
                                <input type="text" readOnly name='productId' value={item.productId} className='hidden' />
                                <input type="text" readOnly name='rating' value={item.rating} className='hidden' />
                                <button type='submit' className='text-[13px] text-white bg-[#333] py-1 px-4 rounded-sm disabled:bg-gray-400' disabled={loading}>
                                    {loading ? "Deleting..." : "Delete"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='my-2'><Rating rating={item.rating} /></div>
                    <div>
                        <p className='text-gray-500 leading-none'>{item.message}</p>
                    </div>
                </div>
            ))}
        </div>
       
    )
}

export default ReviewsUi;
