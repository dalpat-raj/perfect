import { getAdminCollctions } from '@/lib/data';
import Image from 'next/image';
import React from 'react'
import CollectionDelete from './CollectionDelete';
import CollectionEdit from './CollectionEdit';



type Collction = {
    id: number,
    title: string,
    image: string | null,
}

const Collection = async() => {

    const collections:Collction[] | null = await getAdminCollctions();

  return (
    <div className='p-4 relative'>
        {
            collections?.map((item, i)=>(
                <div className='flex justify-between items-center border border-gray-200 my-4 rounded-lg px-4' key={i}>
                    <div className='w-[200px] h-[50px] max-sm:w-[100px]'>
                        <Image
                        src={item?.image}
                        alt={item?.title}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'contain'}}
                        />
                    </div>
                    <div>
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