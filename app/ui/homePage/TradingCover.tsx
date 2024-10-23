'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../product/ProductCard'
import TredingMenu from './TredingMenu'
import Link from 'next/link'
import { Product } from '@/lib/definations'
import { ProductFilterSkeletons } from '../skeletons'
import { caveat } from '../Fonts'


const TradingCover = () => {
  const [fetching, setFetching] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [collection, setCollection] = useState('')


  const fetchProducts = async () => {
    setFetching(true)
    try {
      const querys = new URLSearchParams();
      if (collection) querys.append('collection', collection);
  
      const response = await fetch(`/api/products?${querys.toString()}`);
      const data = await response.json();
  
      setProducts(data.products);
    } catch (error) {
      console.log("not found");
      
    } finally {
      setFetching(false);
    }
  };

  useEffect(()=>{
    fetchProducts()
  },[collection])

  
  return (
    <div className='w-full my-8 max-md:my-4 px-12 max-md:px-4 max-sm:px-2 max-sm:mb-12'>
        <div className='text-center mb-4 max-sm:mb-2'>
            <h2 className={`${caveat.className} text-[37px] font-bold`}>Tranding Item's</h2>
        </div>

        <div>
          <TredingMenu setCollection={setCollection} />
        </div>

        <div className='grid grid-cols-5 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
          {fetching ? <ProductFilterSkeletons  /> : products.map((item, i) => (
              <ProductCard key={i} prod={item} />
          ))}
        </div>
        

        <div className='w-full text-center mt-2'>
          <Link href={'/products'}>
            <button className='bg-[#333333] text-white px-8 py-2 rounded-sm'>View All</button>
          </Link>
        </div>

    </div>
  )
}

export default TradingCover