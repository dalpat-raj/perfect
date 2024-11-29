import { Slider } from '@/components/ui/slider';
import React, { ChangeEvent, useEffect, useState, } from 'react';
import { RxCross1 } from 'react-icons/rx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Collections } from '@/lib/definations';

interface FilterSidebarProps {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilterChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  filters: {
    collection: string;
    minPrice: number;
    maxPrice: number;
    stock: string;
  };
  isFetching: boolean;
}

const FilterSidebar = ({ 
  setOpenFilter, 
  handleFilterChange, 
  filters, 
  isFetching 
}: FilterSidebarProps) => {
  const [collections, setCollections] = useState<Collections[]>([]);
  const [error, setError] = useState<string | null>(null);
  const DEFAULT_CUSTOM_PRICE = [0,500] as [number, number];

  const fetchCollection = async () =>{
    try {
      const response = await fetch(`/api/collections`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      
      setCollections(data)
    } catch (error) {
      setError(error.message || 'Not Available');
    }
  }
  
  useEffect(()=>{
    fetchCollection();
  },[])

  return (
    <div className='p-12 max-md:px-4 max-sm:px-4 relative'>

      <div className='flex justify-between items-center'>
        <p className='text-[22px] font-extrabold'>Filter</p>
        <p onClick={() => setOpenFilter(prev => !prev)}>
          <RxCross1 size={20} />
        </p>
      </div>

      {/* Filter Form */}
        <div className="mt-4">
          <Accordion type='single' collapsible defaultValue="item-2">
            {
              error ? (<></>) : 
                <AccordionItem value="item-1" >
                  <AccordionTrigger className='hover:no-underline'><h4 className='text-[15px] font-semibold mb-0'>Collections</h4></AccordionTrigger>
                  <AccordionContent>
                    {
                      collections?.map((item,i)=>(
                        <div className="flex items-center gap-2 mb-2 max-sm:mb-4" key={i}>
                          <input 
                            id={"collection" + i} 
                            type="radio" 
                            name={"collection"} 
                            checked={filters?.collection === item?.title} 
                            value={item?.title} 
                            onChange={handleFilterChange}
                            className="hidden peer" 
                          />
                          
                          <label htmlFor={"collection" + i} className="relative flex items-center cursor-pointer text-[13px] text-gray-600">
                            <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center mr-3">
                              {
                                filters?.collection === item?.title && (
                                  <span className="w-2 h-2 rounded-full opacity-50 bg-black"></span>
                                )
                              }                              
                            </span>
                            {item?.title}
                          </label>
                        </div>
                      ))
                    }
                  </AccordionContent>
                </AccordionItem>
            }

            <AccordionItem value="item-2">
              <AccordionTrigger className='hover:no-underline'><h4 className='text-[15px] font-semibold mb-2'>Price</h4></AccordionTrigger>
              <AccordionContent >
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
              disabled={isFetching}
              value={[filters.minPrice, filters.maxPrice]}
              min={DEFAULT_CUSTOM_PRICE[0]}
              defaultValue={DEFAULT_CUSTOM_PRICE}
              max={DEFAULT_CUSTOM_PRICE[1]}
              step={5}
              name='price'
              className={isFetching ? "opacity-30 pb-4" : "pb-4"}
              />
              </AccordionContent>
              
            </AccordionItem>

            <AccordionItem value="item-3" >
              <AccordionTrigger className='hover:no-underline'><h4 className='text-[15px] font-semibold mb-2'>Avalablity</h4></AccordionTrigger>
              <AccordionContent>
                <div className=' flex items-center gap-2'>
                  <input 
                  id='inStock' 
                  type="radio" 
                  name='stock' 
                  checked={filters.stock === "inStock"} 
                  value='inStock' 
                  onChange={handleFilterChange}
                  className="hidden peer"
                  />
                  <label htmlFor="inStock" className='relative flex items-center cursor-pointer text-[13px] text-gray-600'>
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center mr-3">
                    {
                      filters?.stock === "inStock" && (
                        <span className="w-2 h-2 rounded-full opacity-50 bg-black"></span>
                      )
                    }                              
                  </span>
                  In Stock</label>
                </div>
                <div className=' flex items-center gap-2 mt-2'>
                  <input 
                  id='outStock' 
                  type="radio"
                  name='stock' 
                  checked={filters?.stock === "outOfStock"} 
                  value='outOfStock' 
                  onChange={handleFilterChange}
                  className="hidden peer"
                  />
                  <label htmlFor="outStock" className='relative flex items-center cursor-pointer text-[13px] text-gray-600'>
                  <span className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center mr-3">
                    {
                      filters?.stock === "outOfStock" && (
                        <span className="w-2 h-2 rounded-full opacity-50 bg-black"></span>
                      )
                    }                              
                  </span>
                  Out Of Stock</label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
  );
}

export default FilterSidebar;
