'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { AllEventData } from '@/lib/definations'
import ProductCard from '../product/ProductCard'

const ProductSlider = ({products}: {products: AllEventData | any}) => {
  return (
    <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
        ]} 
        className="w-full">
        <CarouselContent className="-ml-1">
          {products.map((item: any, index: number) => (
            <CarouselItem key={index} className="pl-1 max-sm:basis-4/6 max-md:basis-2/6 max-lg:basis-1/3 lg:basis-1/4 ">
              <div className="p-1">
                    <div className='w-full h-auto'>
                    <ProductCard prod={item}/>
                    </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  )
}

export default ProductSlider