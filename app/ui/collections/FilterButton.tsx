"use client"
import React, { ChangeEvent } from 'react'
import { CiFilter } from 'react-icons/ci'
import FilterSidebar from './filterSidebar/FilterSidebar';
import clsx from 'clsx';

interface FilterSidebarProps {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  openFilter: boolean;
  handleFilterChange: (event: ChangeEvent <HTMLInputElement | HTMLSelectElement>) => void;
  totalProducts: number,
}

const FilterButton = ({ setOpenFilter, openFilter, handleFilterChange, totalProducts }: FilterSidebarProps) => {
  
  return (
  <>
        <div className='flex items-center justify-between'>
        <div onClick={() => setOpenFilter(prev => !prev)} className='flex items-center justify-start gap-2 border border-gray-300 px-4 py-2 rounded-lg'>
          <CiFilter size={20}/>
          <button className='text-[16px]'>Filter</button>
        </div>
        <div>
          <p className='text-[14px] font-semibold'>{totalProducts} Products</p>
        </div>
      </div>

      <div onClick={()=>setOpenFilter(!openFilter)} className={clsx("h-screen w-3/4 max-md:w-2/4 max-sm:w-1/4 fixed -top-0 right-0 z-50 cursor-pointer bg-blackOverlay addExtra", { 'hidden fixed -top-0 -right-3/4' : openFilter !== true})}>
      </div>
      <div className={clsx("h-screen no-scrollbar overflow-scroll bg-white w-1/4 max-md:w-2/4 max-sm:w-3/4 fixed -top-0 left-0 z-50 addFilter", { 'hidden fixed -top-0 -left-1/4' : openFilter !== true})}>
        <FilterSidebar setOpenFilter={setOpenFilter} handleFilterChange={handleFilterChange}/>
      </div>
      {/* raj  */}
  </>
  )
}

export default FilterButton