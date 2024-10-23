"use client"
import { Collections } from '@/lib/definations'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface CollectionProps {
    collections: Collections;
  }

const CollProdCard: React.FC<CollectionProps> = ({collections}) => {
    const imageUrl1 = collections?.images[0]
    
  return (
    <Link href={`/collections/${collections?.collection}`}>
            <div className='collll h-[50vh] max-sm:h-[30vh] relative rounded-lg overflow-hidden'>
            <div className=''>
                <Image
                    src={imageUrl1}
                    alt={imageUrl1}
                    fill
                    sizes='100vw'
                    style={{objectFit: 'cover'}}
                    unoptimized
                />
            </div>
            <div className='second transition duration-200 ease-in delay-200 h-full w-full bg-blackOverlay absolute top-0 left-0 flext items-center justify-center '>
                <p className='text-[28px] text-white  font-bold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>{collections.collection}</p>
            </div>
            </div>
    </Link>
  )
}

export default CollProdCard