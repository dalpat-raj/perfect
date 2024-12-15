import { getAdminCollctions } from '@/lib/data';
import Image from 'next/image';
import React from 'react'
import CollectionDelete from './CollectionDelete';
import CollectionEdit from './CollectionEdit';
import CollectionImage from './CollectionImage';



type Collction = {
    id: number,
    title: string,
    image: string | null,
}

const Collection = async() => {

    const collections:Collction[] | null = await getAdminCollctions();

  return (
    <div className='p-4 relative flex justify-start gap-4 flex-wrap items-center'>
        {
            collections?.map((item, i)=>(
                <div className='border border-gray-200 rounded-lg p-4' key={i}>
                    <CollectionImage image={item?.image}/>
                    <div className='py-1'>
                        <p>{item.title}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CollectionEdit items={item}/>
                        <CollectionDelete id={item?.id} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Collection