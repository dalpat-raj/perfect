"use client"
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Search from "@/app/ui/homePage/rightNav/Search";
import { RxCross2 } from "react-icons/rx";

type Props = {}

const SearchIcon = (props: Props) => {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <>
        
        <div
          className="cursor-pointer"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <CiSearch size={25} />
        </div>

        {openSearch && (
        <div className="w-full bg-white absolute top-16 left-0 max-lg:block px-12 max-md:px-4 max-sm:px-2 py-8 flex items-center justify-center shadow-lg shadow-gray-500 mix-blend-overlay">
          <Search />
          <div className="absolute top-0 right-12 max-md:right-4 max-sm:right-2 p-2 text-[#333333] cursor-pointer">
            <RxCross2 size={25} onClick={() => setOpenSearch(!openSearch)} />
          </div>
        </div>
      )}
    </>
  )
}

export default SearchIcon