import React from 'react'
import ProductCard from '../ProductCard'
import { FetchSimilarProducts } from '@/lib/data'
import { Product } from '@/lib/definations'
import ProductSlider from '../../SliderProduct/ProductSlider'
import { caveat } from '../../Fonts'

interface CollectionProps {
  collection: string
}

const SimilarProd: React.FC<CollectionProps> = async({collection} ) => {

  const products = await FetchSimilarProducts(collection)
  
  return (
    <div className='w-full my-12 max-md:my-4 '>
      <div className='text-center mb-8'>
        <h2 className={`${caveat.className} text-[34px] fon font-extrabold`}>You may also like</h2>
      </div>
        <div ><ProductSlider products={products}/> </div>
    </div>
  )
}

export default SimilarProd