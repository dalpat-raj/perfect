"use client"
import { sideNavData } from '@/lib/placeholder_data'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const NavLinks = (props: Props) => {
    const pathname = usePathname();
    
  return (
    sideNavData.map((item, i)=>{
        const LinkIcon = item.icon;
        return (
            <Link href={item.url} key={i}>
            <div className={clsx("flex justify-start gap-2 items-center text-gray-400 text-[14px] transition duration-100 ease-in-out delay-100",{
                'text-[16px] text-gray-800 bg-gray-100 font-semibold pl-6 py-1 rounded-br-[90px] rounded-tl-[80px] transition duration-100 ease-in-out delay-100': pathname == item.url
            })}>
                <div><LinkIcon size={20}/></div>
                <p>{item.title}</p>
            </div>
            </Link>
        )
    })
  )
}

export default NavLinks