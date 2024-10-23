import React, { useState, ChangeEvent } from 'react';
import { RxCross1 } from 'react-icons/rx';

interface FilterSidebarProps {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilterChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FilterSidebar = ({ setOpenFilter, handleFilterChange }: FilterSidebarProps) => {
  return (
    <div className='p-12 max-md:px-4 max-sm:px-4 relative'>

      <div className='flex justify-between items-center'>
        <p className='text-[22px] font-extrabold'>Filter</p>
        <p onClick={() => setOpenFilter(prev => !prev)}>
          <RxCross1 size={20} />
        </p>
      </div>

      {/* Filter Form */}
      <div className="bg-white">
        <div className="my-4">
          <select
            name='collection'
            onChange={handleFilterChange}
            className="w-full mt-p-2 block appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base leading-5 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Collection</option>
            <option value="Oppo">
              <input type="checkbox" />
              <p>Oppo</p>
            </option>
            <option value="iPhone">iPhone</option>
            <option value="Samsung">Samsung</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="my-4">
          <label className="block">Price Range</label>
          <input
            type="number"
            onChange={handleFilterChange}
            name="minPrice"
            className="mt-2 border rounded p-2"
            placeholder="Min Price"
          />
          <input
            type="number"
            onChange={handleFilterChange}
            name="maxPrice"
            className="mt-2 border rounded p-2"
            placeholder="Max Price"
          />
        </div>


      </div>

      <div className='bg-white py-4 w-1/4 max-md:w-2/4 max-sm:w-3/4 fixed bottom-0 left-0 px-12 max-sm:px-4'>
        <div className='w-full flex justify-between items-center gap-4'>
          <button className='w-full bg-[#333] px-4 py-2 text-white font-semibold rounded-sm'>Clear</button>
          <button onClick={() => setOpenFilter(prev => !prev)} className='w-full bg-[#333] px-4 py-2 text-white font-semibold rounded-sm'>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
