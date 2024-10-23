import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { userProfileOption } from '@/lib/placeholder_data'
import { AiOutlineLogout } from 'react-icons/ai'
import { Logout } from '@/action/auth'
import { CiUser } from "react-icons/ci";
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/components/ui/avatar'


const DropDown = () => {

    const onClick = () => {
      Logout();
    }

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className='w-[33px] h-[33px] outline-none rounded-full absolute top-0 left-0 py-1 z-50'>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='mr-8 px-2 mt-4'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
            userProfileOption.map((item, i)=>{
                const LinkIcon = item.icon;
                return (
                  <Link href={item.url} key={i}>
                    <DropdownMenuItem >
                    <div className="flex justify-start gap-4 items-center text-gray-500">
                        <div className='test-black'><LinkIcon size={20}/></div>
                        <p className='text-[14px] '>{item.title}</p>
                    </div>
                    </DropdownMenuItem>
                  </Link>
                )
            })
        }
        <DropdownMenuItem >
            <div onClick={onClick} className="flex justify-start gap-4 items-center text-gray-500">
              <div className='test-black'><AiOutlineLogout size={20}/></div>
              <button type='submit' className='text-[14px]'>LogOut</button>
              <input type="text" name="logout" readOnly value={"Logout"} className='hidden'/>
            </div>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default DropDown