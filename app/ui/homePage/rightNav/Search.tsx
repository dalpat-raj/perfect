import { CiSearch } from 'react-icons/ci'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import React from 'react';
import { Product } from '@/lib/definations';

interface SearchProps {
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Search: React.FC<SearchProps> = ({setIsFetching, setProducts}) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    
    setProducts([])
    setIsFetching(true)
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  },150);


  return (
    <div className='relative mt-4'>
      <input 
      type="text"
      placeholder='Search here' 
      className='z-50 w-full text-sm border border-gray-300 outline-0 rounded-xl pl-2 py-[8px] bg-gray-100'
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
      />
      <div className='absolute top-0 h-full border border-gray-300 py-[1px] cursor-pointer rounded-xl px-4 right-0 bg-white flex items-center justify-center'>
        <CiSearch size={20}/>
      </div>
    </div>
  )
}

export default Search