"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RiFacebookBoxLine } from 'react-icons/ri';

type Props = {}

const Menu = (props: Props) => {
    const [show, setShow] = useState<Number>(1)
    const [homeMenu, setHomeMenu] = useState<boolean>(false)
    const [appleMenu, setAppleMenu] = useState<boolean>(false)
    const [samsungMenu, setSamsungMenu] = useState<boolean>(false)
    const [iphoneShow, setIphoneShow] = useState<Number>(0)
    
    
  return (
    <div>
        <ul className='max-md:w-full max-md:h-screen overflow-y-auto max-md:inline-block list-none max-md:absolute max-md:top-16 max-md:left-0 inline-flex cursor-pointer bg-white'>
            <div className='py-4 max-md:px-4 max-md:bg-[#eeeeee]' onClick={()=>{setHomeMenu(!homeMenu);setAppleMenu(false); setSamsungMenu(false)}}>
                <li className={homeMenu ? "max-md:border-0 border-b-2 border-gray-600 mr-10 max-md:hover:bg-[#eeeeee]" : "mr-10"}><Link href="/">Home</Link></li>
            </div>
            <div className='flex justify-between items-center py-4 max-md:px-4' onClick={()=>{setAppleMenu(!appleMenu);setHomeMenu(false); setSamsungMenu(false)}}>
                <li className={appleMenu ? "max-md:border-0 border-b-2 border-gray-600 mr-10 max-md:hover:bg-[#eeeeee]" : "mr-10"}>Apple</li>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>
            <div className='flex justify-between items-center py-4 max-md:px-4' onClick={()=>{setSamsungMenu(!samsungMenu);setHomeMenu(false); setAppleMenu(false)}}>
                <li className={samsungMenu ? "max-md:border-0 border-b-2 border-gray-600 mr-10 max-md:hover:bg-[#eeeeee]" : "mr-10"}>Samsung</li>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>
            <div className='flex justify-between items-center py-4 max-md:px-4' onClick={()=>setShow(4)}>
                <li className={show === 4 ? "max-md:border-0 border-b-2 border-gray-600 mr-10 max-md:hover:bg-[#eeeeee]" : "mr-10"}>OnePlus</li>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>
            <div className='flex justify-between items-center py-4 max-md:px-4' onClick={()=>setShow(5)}>
                <li className={show === 5 ? "max-md:border-0 border-b-2 border-gray-600 mr-10 max-md:hover:bg-[#eeeeee]" : "mr-10"}>Accessories</li>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>
            
            {/* Social Links  */}
            <div className='hidden max-md:block max-md:bg-[#eeeeee] fixed w-full bottom-0 '>
            <ul className='flex gap-4 p-4 '>
                <li><Link href={"/"}><RiFacebookBoxLine size={25}/></Link></li>
                <li><Link href={"/"}><AiOutlineInstagram size={25}/></Link></li>
                <li><Link href={"/"}><AiOutlineYoutube size={25}/></Link></li>
            </ul>
        </div>
        </ul>
        
        <div className={appleMenu ? 'absolute top-20 left-0 w-full h-auto max-md:top-16 flex justify-between p-12 max-md:p-0 max-md:flex-col max-md:justify-start bg-white' : 'unActive'}>

            <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={()=>setAppleMenu(false)}>
                <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                <h2 className='text text-gray-950 font-medium mb-2'>Apple</h2>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(1)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 16 Cover</h2>
                {
                    iphoneShow === 1 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 16 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16 Pro Max</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 16 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16 Pro Max</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(2)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 15 Cover</h2>
                {
                    iphoneShow === 2 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 15 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 15 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(3)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 14 Cover</h2>
                {
                    iphoneShow === 3 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 14 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 14 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(4)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 13 Cover</h2>
                {
                    iphoneShow === 4 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 13 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 13 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(5)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 12 Cover</h2>
                {
                    iphoneShow === 5 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 12 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 12 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 12 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 12 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 12</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 12 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 12 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 12 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 12 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 12</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(6)}>
                <h2 className='text text-gray-950 font-medium mb-2'>iPhone 11 Cover</h2>
                {
                    iphoneShow === 6 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 11 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 11 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 11 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 11</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>iPhone 11 Cover</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 11 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 11 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 11</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>
            
        </div>
       
        
        <div className={samsungMenu ? 'absolute top-20 left-0 w-full h-auto max-md:top-16 flex justify-between p-12 max-md:p-0 max-md:flex-col max-md:justify-start bg-white' : 'unActive'}>

            <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={()=>setSamsungMenu(false)}>
                <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                <h2 className='text text-gray-950 font-medium mb-2'>Samsung</h2>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(1)}>
                <h2 className='text text-gray-950 font-medium mb-2'>Galaxy S Series</h2>
                {
                    iphoneShow === 1 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy S Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 16 Pro Max</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy S Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 16 Pro Max</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(3)}>
                <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Note Series</h2>
                {
                    iphoneShow === 2 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Note Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 15</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Note Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 15</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(3)}>
                <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Z Seriesr</h2>
                {
                    iphoneShow === 3 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Z Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 14</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy Z Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14 Plus</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 14</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

            <div className='p-4 max-md:flex max-md:justify-between max-md:items-center cursor-pointer' onClick={()=>setIphoneShow(4)}>
                <h2 className='text text-gray-950 font-medium mb-2'>Galaxy A Series</h2>
                {
                    iphoneShow === 4 && (
                        <ul className='max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy A Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4'><Link href={"/"}>i Phone 13</Link></li>
                        </ul>
                    )
                }
                        <ul className='max-md:hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:h-[88.6vh] max-md:w-full max-md:bg-white '>
                        <div className='hidden p-4 max-md:flex justify-start items-center gap-4 bg-[#eeeeee] cursor-pointer' onClick={(event)=>{setIphoneShow(0); event.stopPropagation()}}>
                            <div className='hidden max-md:block'><GoArrowLeft size={20}/></div>
                            <h2 className='text text-gray-950 font-medium mb-2'>Galaxy A Series</h2>
                        </div>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Pro Max</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Pro</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13 Mini</Link></li>
                        <li className='pb-2 text-[#5c5c5c] max-md:p-4 hover:border-b hover:border-[#252525]'><Link href={"/"}>i Phone 13</Link></li>
                        </ul>
                <div className='hidden max-md:block'><GoArrowRight size={20}/></div>
            </div>

        </div>
      
    
    </div>
  )
}

export default Menu