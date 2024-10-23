import { getProductByCollection } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { caveat } from '../Fonts'

type Props = {}

interface iphoneProps {
    id: number,
    title: string,
    images: string[]
}

const IphoneZone = async (props: Props) => {

    const iphoneProduct: iphoneProps[] = await getProductByCollection("iPhone");

    const formatTitle = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-') // Replace spaces with hyphens
            .replace(/[^\w-]+/g, ''); // Remove special characters
    };
    
  return (
    <div className='bg-gray-100'>
        <div className='w-full py-12 max-sm:py-6 px-12 max-md:px-4 max-sm:px-2'>

        <div className='flex justify-center items-center gap-4'>
            <Image
            src={"/applelogo.png"}
            alt='I phone Logo'
            width={50}
            height={50}
            />
            <h2 className={`${caveat.className} text-[37px] font-bold`}>I Phone Zone </h2>
        </div>

        <div className="mt-8 grid grid-cols-12 grid-rows-12 gap-4 h-[70vh] w-full">
        {/* Left Large Column */}
        <div className="col-span-3 row-span-12 rounded-lg overflow-hidden max-md:col-span-4 max-md:row-span-12 max-sm:col-span-6 max-sm:row-span-7">
        <Link href={`/products/${formatTitle(iphoneProduct[0].title)}`}>
            <Image
            src={iphoneProduct[0].images[0]}
            alt={iphoneProduct[0].title}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "100%", height: "100%", objectFit: 'cover'}}
            />
        </Link>
        </div>

        {/* Middle Column */}
        <div className="col-span-3 col-start-4 row-start-4 row-span-9 bg-gray-500 rounded-lg overflow-hidden max-md:col-span-4 max-md:col-start-5 max-md:row-start-3 max-sm:col-span-6 max-sm:row-span-3">
        <Link href={`/products/${formatTitle(iphoneProduct[1].title)}`}>
        <Image
            src={iphoneProduct[1].images[2]}
            alt={iphoneProduct[1].title}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "100%", height: "100%", objectFit: 'cover'}}
            />
        </Link>
        </div>
       

        <div className="bg-gray-600 col-start-7 col-span-3 row-span-10  rounded-lg overflow-hidden max-md:col-span-4 max-md:row-span-4 max-sm:col-span-6 max-sm:row-span-4">
        <Link href={`/products/${formatTitle(iphoneProduct[2]?.title)}`}>
        <Image
            src={iphoneProduct[2].images[0]}
            alt={iphoneProduct[2].title}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "100%", height: "100%", objectFit: 'cover'}}
            />
        </Link>
        </div>

        <div className="bg-gray-600 row-span-12 col-span-3 rounded-lg overflow-hidden max-md:col-span-4 max-md:row-span-6 max-sm:col-span-12 max-sm:row-span-5">
        <Link href={`/products/${formatTitle(iphoneProduct[3].title)}`}>
        <Image
            src={iphoneProduct[3].images[0]}
            alt={iphoneProduct[3].title}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: "100%", height: "100%", objectFit: 'cover'}}
            />
        </Link>
        </div>

        </div>
        </div>
    </div>
  )
}

export default IphoneZone