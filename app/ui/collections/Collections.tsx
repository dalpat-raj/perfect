import React from 'react'
import {  getUniqueCollections } from '@/lib/data'
import { caveat } from '../Fonts'
import CollectionCarousel from './CollectionCarousel'


const Collections = async () => {
  const collections = await getUniqueCollections();
  
  return (
    <div className='w-full'>
        <div className='text-center mb-8'>
            <h2 className={`${caveat.className} text-[37px] font-bold`}>Our Collections</h2>
        </div>
        <div className='w-full'>
            <CollectionCarousel collections={collections} />
        </div>
    </div>
  )
}

export default Collections