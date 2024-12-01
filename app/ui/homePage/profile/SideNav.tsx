import React from 'react';
import Image from 'next/image'
import NavLinks from './NavLinks';
import { currentUser } from '@/lib/data';


const SideNav = async() => {
    const user = await currentUser();
  return (
    <div className='flex flex-col gap-6 max-sm:block'>
            <div className='bg-white shadow-custom-shadow rounded-md flex items-center gap-2 p-2 py-3'>
                <div className='rounded-full overflow-hidden'>
                    <Image
                    src={user?.image || "/e22.jpg"}
                    alt='avatar'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "50px", height: "50px", objectFit: "cover"}}
                    />
                </div>
                <div>
                    <p className='text-[12px] font-semibold text-gray-700'>Hello,</p>
                    <p className='text-[16px] font-bold text-gray-600'>{user?.name}</p> 
                </div>
            </div>

            <div className='h-[57vh] bg-white shadow-custom-shadow rounded-md max-md:hidden'>
                <NavLinks/>
            </div>
        
        
    </div>
  )
}

export default SideNav
