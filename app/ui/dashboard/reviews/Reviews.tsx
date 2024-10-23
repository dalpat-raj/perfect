import React from 'react'
import Rating from '../../rating/Rating'
import { getReviews } from '@/lib/data'
import { Review } from '@/lib/definations'
import { formatDate } from '@/lib/formDatePage'
import { reviewDelete } from '@/action/reviews'

type Props = {}

const Reviews = async (props: Props) => {
    let reviews: Review[] = [];
    let isLoading = true;

    try {
        reviews = await getReviews();
        isLoading = false; // Data is loaded
    } catch (error) {
        console.error('Error fetching reviews:', error);
        isLoading = false; // Even in case of an error, we stop loading
    }

    return (
        <div className=''>
            <div className='p-4 mt-4'>
                {isLoading ? (
                    <div className="text-center">Loading...</div> 
                ) : (
                    reviews?.map((item, i) => (
                        <div className='mb-6 border-b border-gray-100 pb-4' key={i}>
                            <div className='flex justify-between'>
                                <div className='flex justify-start items-center bg-gray-200 w-max pr-6 rounded-lg gap-1'>
                                    <div className='w-6 h-6 rounded-full bg-green-500 flex justify-center items-center p-1 text-[16px] text-white font-bold'>{item.name.slice(0, 1)}</div>
                                    <p className='text-[14px]'>{item.name}</p>
                                </div>

                                <div className='flex justify-center items-center gap-2 text-[12px] text-gray-400'>
                                    <p>{formatDate(item.createdAt)}</p>
                                    <p>{item.createdAt.toLocaleTimeString()}</p>
                                </div>

                                <div>
                                    <form action={reviewDelete}>
                                        <input type="text" name='id' defaultValue={item.id} className='hidden' />
                                        <button type='submit' className='text-[13px] text-white bg-blackOverlay py-1 px-4 rounded-sm'>Delete</button>
                                    </form>
                                </div>
                            </div>
                            <div className='my-2'><Rating rating={item.rating} /></div>
                            <div>
                                <p className='text-gray-500 leading-none'>{item.message}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Reviews;
