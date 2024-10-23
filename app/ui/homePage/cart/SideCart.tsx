import React from 'react'
import { CartItem } from '@/lib/definations';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import CartItemCard from './CartItemCard';
import { useAppDispatch } from '@/lib/store/hooks';
import { addToCart } from '@/lib/store/features/cart/cartSlice';
import Image from 'next/image';

interface OpenCartSidebarProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartItem: CartItem[] | undefined;
  }

const Cart = ({setOpenCart, cartItem}: OpenCartSidebarProps) => {

  const dispatch = useAppDispatch();

  const totalPrice  = cartItem?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const quantityChangeHandler = (item: CartItem) => {
    dispatch(addToCart(item));
  };


  return (
    <div className='py-8 px-4'>

      <div className='flex justify-between items-center'>
        <p className='text-[22px] font-extrabold'>Your Cart</p>
        <p className="cursor-pointer" 
        onClick={() => setOpenCart(prev => !prev)}>
          <RxCross1 size={20} />
        </p>
      </div>

      

      {
        cartItem?.length ? (
          <div className='overflow-scroll no-scrollbar h-[62vh] max-sm:h-[70vh]'>
          {
            cartItem?.map((item, i)=>(
              <CartItemCard item={item} quantityChangeHandler={quantityChangeHandler} key={i}/>
            ))
          }
          </div>
        ) : (
          <div className='h-[62vh] max-sm:h-[70vh] flex justify-center items-center'>
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
          <div className='w-full px-4 absolute max-sm:fixed bottom-0 left-0 py-4 bg-gray-100'>
        <div className='flex justify-between items-center'>
          <p className='text-[18px] font-semibold'>Total</p>
          <p className='text-[14px] font-semibold'>Rs. {totalPrice?.toFixed(2)}</p>
        </div>
        <p className='text-[14px] text-gray-500'>Tax and Shipping calculated at checkout</p>
        <button disabled={cartItem?.length !== 0} onClick={()=>setOpenCart(false)} className='mt-4 w-full bg-[#333] block py-2 text-white font-semibold text-[14px] rounded-lg'>
          {cartItem?.length >= 1 ? <Link href={"/checkout"}>PROCESS TO CHAECKOUT</Link> : <Link href={"/products"}>Click To Add Product</Link>}
        </button>
        <button onClick={()=>setOpenCart(false)} className=' mt-4 w-full block py-2 border border-gray-600 font-semibold text-[14px] rounded-lg'><Link href={"/cart"}>VIEW CART</Link></button>
      </div>
        )
      }

    </div>
  )
}

export default Cart