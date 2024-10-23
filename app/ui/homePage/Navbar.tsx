import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.jpg"
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import RightNav from './RightNav'

type Props = {}

const Navbar = async(props: Props) => {
    

  return (
    <div className='sticky top-0 left-0 bg-white z-50'>
        <div className='h-15 max-sm:h-10 bg-black text-white text-center py-2 max-sm:text-[13px] text-[15px]'>
            <p>Pay Online and Get Free Express Shipping + Priority Dispatch</p>
        </div>
        <div className='w-full flex justify-between items-center px-12 max-md:px-4 max-sm:px-2 h-20 max-md:h-16  border-b max-lg:border-0 border-gray-400 text-base relative'>
            <div className='hidden max-md:block'>
                <MobileMenu/>
            </div>
            <div className='flex justify-between items-center gap-8'>
                <Link href="/">
                    <Image 
                    src={logo} 
                    alt='logo'
                    width={150}
                    height={0}
                    />
                </Link>
                <div className='max-md:hidden'>
                <Menu />
                </div>
            </div>
            <div>
                <RightNav/>
            </div>
        </div>
    </div>
  )
}

export default Navbar