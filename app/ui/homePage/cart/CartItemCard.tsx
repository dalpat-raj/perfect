import { CartItem } from '@/lib/definations'
import { removeFromCart } from '@/lib/store/features/cart/cartSlice'
import { useAppDispatch } from '@/lib/store/hooks'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'

interface CartItemCardProps {
    item: CartItem;
    quantityChangeHandler: (item: CartItem) => void; // Function that takes a CartItem and returns void
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, quantityChangeHandler }) => {
    const [value, setValue] = useState(item?.quantity);
    const dispatch = useAppDispatch();
  
      const removerFromCartHandler = (productId: number) => {
        dispatch(removeFromCart (productId))
      }
  
      
  
    const increment = (item: CartItem) => {
      if(item?.stock <= value){
        alert("Product stock limited")
      }else{
        setValue(value + 1);
        const updateCartData = {...item, quantity: value + 1};
        
        quantityChangeHandler(updateCartData)
      }
    }
  
    const decrement = (item: CartItem) => {
      setValue(value === 1 ? 1 : value - 1);
      const updateCartData = {...item, quantity: value === 1 ? 1 : value - 1};
      quantityChangeHandler(updateCartData)
    }
    

  return (
        <div className='flex justify-start items-center gap-2 mb-4'>
            <div>
            <Image
            src={item.image}
            alt={item.image + item.model}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "80px", height: '80px', objectFit: 'cover'}}
            unoptimized
            />
            </div>
            <div className='w-full'>
            <p className='text-[14px] leading-none'>{item.title}...</p>
            <p className='text-[14px] leading-tight text-gray-500'>Model - {item.model}</p>
            <p className='text-[14px] leading-none'>Rs. {item.price}</p>
            <div className='w-full flex justify-between items-center gap-4'>
                <div className='mt-2 h-8 w-28 border border-gray-300 bg-white grid grid-cols-4 items-center'>
                    <button onClick={()=>decrement(item)} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700'><FaMinus size={10}/> </button>
                    <p className='col-span-2 text-center text-black text-[14px]'>{item.quantity}</p>
                    <button onClick={()=>increment(item)} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700'><FaPlus size={10}/> </button>
                </div>
                <div onClick={()=>removerFromCartHandler(item.productId)} className='text-gray-500 cursor-pointer'><RiDeleteBinLine size={23}/></div>
            </div>
        </div>
        </div>
  )
    
          
        
     
}

export default CartItemCard