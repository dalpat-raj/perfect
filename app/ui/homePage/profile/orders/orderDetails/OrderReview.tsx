import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { IoCamera } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { reviewAdd } from '@/action/reviews';
import { OrderSingleItem, Review, User } from '@/lib/definations';
import { caveat } from '@/app/ui/Fonts';
import Rating from '@/app/ui/rating/Rating';
import Image from 'next/image';


type Props = {
  setReviewBox: React.Dispatch<React.SetStateAction<boolean>>,
  user: User | null,
  item: OrderSingleItem,
  reviews: Review[]
}

const ReviewForm: React.FC<Props> = ({ setReviewBox, user, item, reviews }) => {
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User | null>(null);


  useEffect(() => {
    user && setUsers(user);
  }, [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget); 
    try {
      const reviewAddAction = reviewAdd.bind(null, item?.productId, rating);
      const data = await reviewAddAction(formData);
      if (data) {
        setIsLoading(false);
        setReviewBox(false);
        
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='py-6 px-4'>
      <div className='flex justify-between items-center'>
        <h2 className={`${caveat.className} text-[24px] font-bold`}>Rate Us</h2>
        <RxCross1 size={20} onClick={() => setReviewBox(false)} className='cursor-pointer' />
      </div>

      <div className='border-2 border-gray-200 p-2 mt-2'>
        <div className='flex justify-start items-center gap-4'>
          <div>
            <Image
              src={item?.image}
              alt='product'
              width={50}
              height={50}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p className='text-[14px] font-bold'>{item?.title}</p>
            <div className='flex justify-start items-center gap-2'>
              <Rating rating={item.rating} />
              <p className='text-[14px] text-gray-500'>{reviews.length} reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full my-4 h-[2px] border border-gray-200'></div>

      <div className='flex justify-start items-center gap-6'>
        <p className='text-[13px] font-bold'>QUALITY</p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) =>
            rating >= i ? (
              <AiFillStar
                key={i}
                className="cursor-pointer"
                onClick={() => setRating(i)}
                color="rgb(246,186,0)"
                size={22}
              />
            ) : (
              <AiOutlineStar
                key={i}
                className="cursor-pointer"
                onClick={() => setRating(i)}
                color="rgb(246,186,0)"
                size={22}
              />
            )
          )}
        </div>
      </div>

      <div className='mt-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name" className='text-[12px] font-semibold'>YOUR NAME</label>
            <input
              id='name'
              type='text'
              placeholder='Sonu Sharma'
              name='name'
              defaultValue={users?.name || ''}
              required
              className='w-full text-[14px] py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400'
            />
          </div>
          
          <div className='mb-3'>
            <label htmlFor="email" className='text-[12px] font-semibold'>YOUR EMAIL</label>
            <input
              id='email'
              type='email'
              placeholder='example@gmail.com'
              name='email'
              defaultValue={users?.email || ''}
              required
              className='w-full text-[14px] py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="message" className='text-[12px] font-semibold'>REVIEW CONTENT</label>
            <textarea 
              id="message"
              name="message" 
              required
              rows={4}
              placeholder='Type your good message!'
              className='w-full text-[14px] font-normal py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400'
            />
          </div>
          
          <div className='mb-3 flex justify-start items-center gap-4'>
            <div className='relative'>
              <input
                id="message"
                type='file'
                name="image"
                className='w-[45px] h-[45px] text-[14px] font-normal py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400 opacity-0 absolute z-10 cursor-pointer' // Hidden but clickable
              />
              <div className='w-[45px] h-[45px] bg-gray-100 text-gray-300 flex justify-center items-center'>
                <label htmlFor="message" className='cursor-pointer'>
                  <IoCamera size={28} />
                </label>
              </div>
            </div>
            <label htmlFor="message" className='text-[14px] font-semibold'>
              <p className='text-[14px] font-semibold'>Upload Photos</p>
              <small className='text-gray-300'>Accept .jpg, .png and max 10MB each</small>
            </label>
          </div>
          
          <button type='submit' className='bg-[#FFB102] py-1 px-4 rounded-sm text-white text-[15px] font-bold' disabled={isLoading}>
            {isLoading ? "wait" : "Submit Your Review"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm;
