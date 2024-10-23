"use client"
import { CartItem, Product } from '@/lib/definations';
import { addToCart } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { toast } from 'sonner';

type Props = {}

const ProductButtons = ({productDetail}: {productDetail : Product | null}) => {
    const [qty, setQty] = useState<number>(1)
    const [modell, setModel] = useState<string | undefined>(productDetail?.model[0])

    const dispatch = useAppDispatch();

     
    const AddToCartHandler = (productDetail: Product | null) => {
        toast.success("added")
        if (!productDetail) {
            alert("Product details missing");
            return;
        }

        // Prepare the cart item
        const cartItem = {
            productId: productDetail.id,
            title: productDetail.title,
            price: productDetail.sellingPrice,
            stock: productDetail.stock,
            modelNumber: productDetail.modelNumber,
            image: productDetail.images[0],
            color: productDetail.color,
            rating: productDetail.rating,
            model: productDetail.model[0],  // Assuming you have a model
            quantity: qty,
        };
        dispatch(addToCart(cartItem));
        
    };
    


  return (
    <div>
        <div className='my-4'>
            <p className='text-[11px] font-bold'>SELECT MODEL</p>
            <select onChange={(e)=>setModel(e.target.value)} className='mt-2 w-36 border border-gray-300 py-1 text-gray-700 bg-white outline-none'>
                {
                    productDetail?.model?.map((item, i)=>(
                        <option key={i} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>

        <div className='my-4'>
            <p className='text-[11px] font-bold'>QUANTITY</p>
            <div className='mt-2 h-8 w-36 border border-gray-300 bg-white grid grid-cols-4 items-center'>
                <button onClick={()=>setQty(qty > 1 ? qty - 1 : 1)} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700'><FaMinus size={10}/> </button>
                <p className='col-span-2 text-center text-black'>{qty}</p>
                <button onClick={()=>setQty(qty + 1)} className='col-span-1 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700'><FaPlus size={10}/> </button>
            </div>
        </div>

        <button onClick={()=>AddToCartHandler(productDetail)} className='w-full transition ease-in-out duration-200 hover:bg-[#333333] bg-[#181818] flex items-center justify-center gap-4 text-white font-bold py-3'>
            <CiShoppingCart size={30}/>
            <p>Add To Cart - RS. {productDetail?.sellingPrice}</p>
        </button>

    </div>
  )
}

export default ProductButtons