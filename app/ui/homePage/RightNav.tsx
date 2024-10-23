"use client"
import React, { useEffect, useState } from 'react';
import { CiUser, CiSearch } from "react-icons/ci";
import Search from './Search';
import { RxCross2 } from 'react-icons/rx';
import clsx from 'clsx';
import Cart from './cart/SideCart';
import { useAppSelector } from '@/lib/store/hooks';
import { CartItem } from '@/lib/definations';
import DropDown from './DropDown';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/use-current-user';
import Image from 'next/image';



const RightNav = () => {
    const user = useCurrentUser();
    
    const cart = useAppSelector((state) => state.cart.items);
    const [cartItem, setCartItem] = useState<CartItem[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true); 
    
    useEffect(() => {
        setCartCount(cart?.length >= 1 ? cart?.length : 0);
        setCartItem(cart );
        
        if (!firstLoad && cart?.length > cartItem?.length) {
            setOpenCart(true);
        }
        
        if(firstLoad){
            setFirstLoad(false);
        }
        
    }, [cart]); 

    return (
        <>
            <div className='w-full flex justify-between items-center gap-4 max-sm:gap-2 max-sm:pr-2'>
                <div className='cursor-pointer' onClick={() => setOpenSearch(!openSearch)}><CiSearch size={25} /></div>

                {
                    user ? (
                        <div className='relative'>
                        <div className='cursor-pointer relative overflow-hidden'>
                           {
                            user?.image ? (
                                <Image
                                    src={user?.image}
                                    alt={user?.image}
                                    width={30}
                                    height={30}
                                    style={{borderRadius: "50%"}}
                                />
                            ) : <CiUser size={20}/>
                           }
                        </div>
                        <DropDown/>
                        </div>
                    ) : (
                        <Link href={"/auth/sign-in"}>
                            <div className='cursor-pointer relative overflow-hidden'><CiUser size={22} /></div>
                        </Link>
                    )
                }

                <div className='relative cursor-pointer text-gray-600' onClick={() => setOpenCart(true)}>
                    <MdOutlineShoppingCart size={23} />
                    <p className='w-5 h-5 absolute -top-2/3 -right-2 bg-gray-800 text-white text-sm flex items-center justify-center rounded-full'>{cartCount}</p>
                </div>
            </div>

            <div onClick={() => setOpenCart(!openCart)} className={clsx("h-screen w-4/6 max-lg:w-2/4 max-sm:w-0 fixed -top-0 left-0 z-50 cursor-pointer bg-blackOverlay addCartExtra", { 'hidden fixed -top-0 -left-3/4': openCart !== true })}>
            </div>
            <div className={clsx("h-screen no-scrollbar overflow-scroll bg-white w-2/6 max-lg:w-2/4 max-sm:w-full fixed top-0 right-0 z-50 addCart", { 'hidden fixed -top-0 -right-1/4': openCart !== true })}>
                <Cart setOpenCart={setOpenCart} cartItem={cartItem} />
            </div>

            {openSearch && (
                <div className="w-full bg-white absolute top-16 right-0 max-lg:block px-12 max-md:px-4 max-sm:px-2 py-8 flex items-center justify-center transition duration-500 ease-in opacity-100 shadow-lg shadow-gray-500 mix-blend-overlay">
                    <Search />
                    <div className='absolute top-0 right-12 max-md:right-4 max-sm:right-2 p-2 text-[#333333] cursor-pointer'>
                        <RxCross2 size={25} onClick={() => setOpenSearch(!openSearch)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default RightNav;
