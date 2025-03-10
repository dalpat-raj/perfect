"use client"
import Image from 'next/image'
import React, { useTransition } from 'react'
import { TfiSettings } from "react-icons/tfi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from 'next/link';
import NavLinks from './NavLinks';
import { LogoutButton } from '../homePage/auth/logout-button';
import { Logout } from '@/action/auth';


const SideNav = () => {
    const [isPending, startTransition] = useTransition();
    
    const onClick = () => {
        startTransition(()=>{
            Logout();
        })
    }
  return (
    <div className='pl-12 pt-8 max-md:px-4 max-sm:px-2'>
        <div>
            {/* logo  */}
            <div className='mb-8'>
                <Image
                src={"https://utfs.io/f/MqHs9IJPs5ZRjS7ulmfsythvU61dKic5PTAzfrXMC2HxEgFS"}
                alt='perfect cover logo'
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '150px', height: "auto"}}
                />
            </div>

            {/* menu  */}
            <div className='w-full flex flex-col gap-3'>
            <NavLinks/>
            </div>

            {/* bottom */}
            <div className='absolute bottom-0 py-12 flex flex-col gap-4'>
                <Link href="/dashboard/setting">
                <div className='flex justify-start gap-2 items-center text-gray-400'>
                    <TfiSettings size={20}/>
                    <p className='text-[14px] text-gray-500'>Setting</p>
                </div>
                </Link>
              
                <LogoutButton>
                <div onClick={()=>onClick()} className='flex justify-start gap-2 items-center text-gray-400'>
                    <RiLogoutCircleRLine size={20}/>
                    <p className='text-[14px]'>{isPending ? "Wait" : "Sign Out"}</p>
                </div>
                </LogoutButton>
                
            </div>

        </div>
    </div>
  )
}

export default SideNav