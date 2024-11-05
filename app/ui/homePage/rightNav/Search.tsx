import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type Props = {}

const Search = (props: Props) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);


  return (
    <div className='relative mt-4'>
      <input 
      type="text"
      placeholder='Search here' 
      className='w-[92vw] max-md:w-[90vw] max-lg:w-[86vw] text-sm border border-gray-300 outline-0 rounded-xl pl-2 py-[8px]'
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