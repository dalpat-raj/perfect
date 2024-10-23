"use client"
import { CartItem } from '@/lib/definations';
import { addToCart } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CartItemCard from './CartItemCard';
import Link from 'next/link';

type Props = {}

const Cart = (props: Props) => {
    const cart = useAppSelector((state) => state.cart.items);
    const [cartItem, setCartItem] = useState<CartItem[]>([]);
    const dispatch = useAppDispatch();

    const totalPrice  = cartItem?.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  
    const quantityChangeHandler = (item: CartItem) => {
      dispatch(addToCart(item));
    };
    
    useEffect(() => {
        setCartItem(cart[0] && cart );
    }, [cart]);  

  return (
    <div className='w-full grid grid-cols-12 max-sm:grid-cols-1 gap-6 my-8'>
        {
             cartItem?.length ? (
                <div className='no-scrollbar col-span-7 px-4 shadow-lg'>
                {
                  cartItem?.map((item, i)=>(
                    <CartItemCard item={item} quantityChangeHandler={quantityChangeHandler} key={i}/>
                  ))
                }
                </div>
              ) : (
                <div className='flex justify-center items-center w-[100vw] h-[70vh]'>
                  <Image
                  src={'/emptyCart.jpg'}
                  alt='empty cart'
                  width={250}
                  height={250}
                  style={{objectFit: 'cover'}}
                  />
                </div>
              )
        }

        {
        cartItem && (
        <div className='col-span-4 max-sm:col-span-7'>
            <div className='p-4 bg-gray-100'>
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] font-semibold'>Total</p>
                    <p className='text-[14px] font-semibold'>Rs. {totalPrice?.toFixed(2)}</p>
                </div>
                <p className='text-[14px] text-gray-500'>Tax and Shipping calculated at checkout</p>
                <button className=' w-full mt-4 bg-[#333] block py-2 text-white font-semibold text-[14px] rounded-lg'>
                <Link href={"/cart/checkout"}>PROCESS TO CHAECKOUT</Link>
                </button>
            </div>
        </div>
        )}
    </div>
  )
}

export default Cart