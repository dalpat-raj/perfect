"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoIosArrowDown } from 'react-icons/io';

type Props = {}

const Footer = (props: Props) => {

  const [descShow, setDescShow] = useState<boolean>(false)
  const [contactShow, setContactShow] = useState<boolean>(false)
  const [helpShow, setHelpShow] = useState<boolean>(false)
  
  return (
    <div className='w-full px-24 max-lg:px-12 max-md:px-4 max-sm:px-2 bg-[#111111] '>
      <div className='py-12 max-sm:py-4 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 text-white max-sm:hidden'>
        <div>
          <h2 className='text-[17px] pb-2'>Company</h2>
          <ul className='text-[14px] font-semibold'>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/'}>Our Story</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/'}>Our Blog</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/privacy-policy'}>Privacy Policy</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/terms-of-service'}>Terms Of Service</Link></li>
          </ul>
        </div>

        <div>
          <h2 className='text-[17px] pb-2'>Need Help ?</h2>
          <ul>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/'}>Track Order</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href="/pages/cancellation">Cancellation</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href={'/pages/cancellation'}>Refund & Exchange Policy</Link></li>
            <li className='list-none py-1 text-[14px] font-normal hover:text-[16px]'><Link href="/pages/shipping-information">Shipping Information</Link></li>
          </ul>
        </div>

        <div>
          <h2 className='text-[17px] pb-2'>Contact</h2>
          <ul>
            <li className='list-none py-1 text-[14px] font-normal'>Entity Of Pankaj Gaur</li>
            <li className='list-none py-1 text-[14px] font-normal'>2024 © Perfect Cover</li>
            <li className='list-none py-1 text-[14px] font-normal'>Made With ❤️ In World</li>
            <li className='list-none py-1 text-[14px] font-normal'>Call Us @ 6356060606</li>
            <li className='list-none py-1 text-[14px] font-normal'>Email @ care@kalakaarindia.in</li>
          </ul>
        </div>

        <div>
          <h2 className='text-[17px] pb-2'>Sign up and save</h2>
          <li className='list-none py-1 text-[14px] font-normal'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</li>
          <li className='list-none text-[14px] font-normal mt-4 relative'>
            <input type="text" placeholder='Enter your email' className='w-full border border-white bg-[#111111] py-2 pl-12'/>
            <span className='absolute top-0 left-0 h-full w-10 flex items-center justify-center'><HiOutlineMailOpen size={20}/></span>
          </li>
        </div>
      </div>

      {/* mobile footer  */}
      <div className='hidden max-sm:block py-12 max-sm:py-4 text-white'>
      <div className='mt-4 pb-2 border-b border-gray-700'>
        <div onClick={()=>setDescShow(!descShow)} className='flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Company</h6>
            <div className={descShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={descShow ? "py-4 transition duration-500 ease-in opacity-100" : "opacity-0 absolute"}>
          <ul className='text-[14px] font-semibold'>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/'}>Our Story</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/'}>Our Blog</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/privacy-policy'}>Privacy Policy</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/terms-of-service'}>Terms Of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className='mt-4 pb-2 border-b border-gray-700'>
        <div onClick={()=>setHelpShow(!helpShow)} className='flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Need Help ?</h6>
            <div className={helpShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={helpShow ? "py-4 transition duration-500 ease-in opacity-100" : "opacity-0 absolute"}>
          <ul className='text-[14px] font-semibold'>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/'}>Track Order</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href="/pages/cancellation">Cancellation</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href={'/pages/cancellation'}>Refund & Exchange Policy</Link></li>
            <li className='list-none py-1 text-[14px] font-normal'><Link href="/pages/shipping-information">Shipping Information</Link></li>
          </ul>
        </div>
      </div>

      <div className='mt-4 pb-2 border-b border-gray-700'>
        <div onClick={()=>setContactShow(!contactShow)} className='flex justify-between items-center cursor-pointer'>
            <h6 className='text-[13px] uppercase font-extrabold'>Contact</h6>
            <div className={contactShow ? "transition duration-200 rotate-180" : "transition duration-200"}><IoIosArrowDown size={20}/></div>
        </div>
        <div className={contactShow ? "py-4 transition duration-500 ease-in opacity-100" : "opacity-0 absolute"}>
          <ul className='text-[14px] font-semibold'>
            <li className='list-none py-1 text-[14px] font-normal'>Entity Of Pankaj Gaur</li>
            <li className='list-none py-1 text-[14px] font-normal'>2024 © Perfect Cover</li>
            <li className='list-none py-1 text-[14px] font-normal'>Made With ❤️ In World</li>
            <li className='list-none py-1 text-[14px] font-normal'>Call Us @ 6356060606</li>
            <li className='list-none py-1 text-[14px] font-normal'>Email @ care@kalakaarindia.in</li>
          </ul>
        </div>
      </div>

      <div className='my-4'>
          <h2 className='text-[17px] pb-2'>Sign up and save</h2>
          <li className='list-none py-1 text-[14px] font-normal'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</li>
          <li className='list-none text-[14px] font-normal mt-4 relative'>
            <input type="text" placeholder='Enter your email' className='w-full border border-gray-500 bg-[#111111] py-2 pl-12'/>
            <span className='absolute top-0 left-0 h-full w-10 flex items-center justify-center'><HiOutlineMailOpen size={20}/></span>
          </li>
        </div>
      </div>

      <div className='text-white w-full flex items-center justify-center max-md:gap-4 gap-8 pb-8'>
        <HiOutlineMailOpen size={25} className='cursor-pointer'/>
        <FiInstagram size={25} className='cursor-pointer'/>
        <CiTwitter size={25} className='cursor-pointer'/>
        <CiYoutube size={25} className='cursor-pointer'/>
      </div>

      <div className='text-white text-center py-8 border-t-[1px] border-gray-400'>
        <p>Perfect Cover All Right Resevered</p>
      </div>
    </div>
  )
}

export default Footer