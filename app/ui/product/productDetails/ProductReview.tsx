import React, { useEffect, useState } from 'react'
import Rating from '../../rating/Rating'
import ReviewForm from '../../rating/ReviewForm'
import { Product, Review, User } from '@/lib/definations'
import { formatDate } from '@/lib/formDatePage'

type Props = {
    user: User | any,
    product: Product | null,
}

const ProductReview = ({user, product}: Props) => {
    const [reviewBox, setReviewBox] = useState<boolean>(false);
    const [reviews, setReviews] = useState<Review[] | null>([]);

    useEffect(()=>{
        setReviews(product ? product?.review : null )
    },[product])

  return (
    <div className='mb-4'>
        <div className='border-b border-gray-200 pb-2 mb-2'>
            <h2 className={`text-[18px] font-bold`}>Coustomer Reviews</h2>
        </div>
        <div className='w-full flex justify-center items-center border-b border-gray-200 pb-4 mb-4'>
            <div className='flex flex-col  gap-1 items-center '>
                <h2 className='text-[18px] font-bold'>{product?.rating}</h2>
                <div><Rating rating={product?.rating}/></div>
                <p className='text-sm text-gray-600'>{reviews?.length} reviews</p>
                <button onClick={()=>setReviewBox(!reviewBox)} className='bg-[#FFB102] py-1 px-4 rounded-sm text-white text-lg font-bold'>write a review</button>
            </div>
        </div>

        {
            reviewBox && (
                <div className='h-[100vh] w-[100vw] fixed top-0 left-0 bg-blackOverlay z-50 flex justify-center items-center'>
                    <div className='bg-white h-[80vh] w-auto overflow-scroll no-scrollbar z-50'>
                      <ReviewForm setReviewBox={setReviewBox} users={user} product={product}/>
                    </div>
                </div>
            )
        }

        <div>
            {
                reviews?.map((item, i)=>(
                <div className='mb-6 border-b border-gray-100 pb-4' key={i}>
                    <div className='flex justify-between'>

                        <div className='flex justify-start items-center bg-gray-200 w-max pr-2 rounded-lg gap-1'>
                            <div className='w-6 h-6 rounded-full bg-green-500 flex justify-center items-center p-1 text-[16px] text-white font-bold'>{item.name.slice(0,1)}</div>
                            <p className='text-[14px]'>{item.name}</p>
                        </div>

                        <div className='flex justify-center items-center gap-2 text-[12px] text-gray-400'>
                            <p>{formatDate(item.createdAt)}</p>
                            <p>{item.createdAt.toLocaleTimeString()}</p>
                        </div>

                    </div>
                    <div className='my-2'><Rating rating={item.rating}/></div>
                    <div>
                        <p className='text-gray-500 leading-none'>{item.message}</p>
                    </div>
                </div>
                ))
            }

        </div>
    </div>
  )
}

export default ProductReview