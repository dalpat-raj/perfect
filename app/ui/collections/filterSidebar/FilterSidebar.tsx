import { Slider } from '@/components/ui/slider';
import React, { ChangeEvent } from 'react';
import { RxCross1 } from 'react-icons/rx';

interface FilterSidebarProps {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilterChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  filters: {
    collection: string;
    minPrice: number;
    maxPrice: number;
  }
}

const FilterSidebar = ({ setOpenFilter, handleFilterChange, filters }: FilterSidebarProps) => {

  const DEFAULT_CUSTOM_PRICE = [0,500] as [number, number];

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
        <div className="my-6">
          <h4 className='text-[15px] font-semibold mb-2'>Collections</h4>
          <select
            name='collection'
            onChange={handleFilterChange}
            className="w-full mt-p-2 block appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base leading-5 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Collection</option>
            <option value="iPhone">iPhone</option>
            <option value="Samsung">Samsung</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="my-6">
          <h4 className='text-[15px] font-semibold mb-2'>Price</h4>
          <div className='flex justify-between w-full overflow-hidden mb-3'>
            <p className='text-[14px]'>Custom Price</p>
            <div className='flex gap-2 items-end'>
                <p className='text-gray-400'>₹</p>
                <p className='text-gray-600 text-[14px]'>{filters.minPrice}</p>
              <span className='text-[14px] font-semibold text-gray-800'>To</span> 
                <p className='text-gray-600 text-[14px]'>{filters.maxPrice}</p>
            </div>
          </div>
          <Slider
          onValueChange={(range)=>{
            const [newMin, newMax] = range;
            handleFilterChange({ target: { name: 'minPrice', value: newMin.toString() } } as ChangeEvent<HTMLInputElement>);
            handleFilterChange({ target: { name: 'maxPrice', value: newMax.toString() } } as ChangeEvent<HTMLInputElement>);
          }}
          value={[filters.minPrice, filters.maxPrice]}
          min={DEFAULT_CUSTOM_PRICE[0]}
          defaultValue={DEFAULT_CUSTOM_PRICE}
          max={DEFAULT_CUSTOM_PRICE[1]}
          step={5}
          name='price'
          />
        </div>


      </div>
      
    </div>
  );
}

export default FilterSidebar;
