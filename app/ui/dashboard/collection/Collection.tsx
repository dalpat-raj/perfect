import { getAdminCollctions } from '@/lib/data';
import Image from 'next/image';
import React from 'react'
import CollectionButton from './CollectionButton';


type Props = {}

type Collction = {
    id: number,
    title: string,
    image: string | null,
}

const Collection = async(props: Props) => {

    const collections:Collction[] | null = await getAdminCollctions();

  return (
    <div className='px-4 my-4 relative'>
        <div className='my-4 text-center'>
            <h2 className='text-[20px] font-bold'>Our Collections</h2>
        </div>
        {
            collections?.map((item, i)=>(
                <div className='flex justify-between items-center border border-gray-200 my-4 rounded-lg px-4' key={i}>
                    <div className='w-[200px] h-[50px] max-sm:w-[100px]'>
                        <Image
                        src={item?.image ? item?.image : ''}
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'contain'}}
                        />
                    </div>
                    <div>
                        <p>{item.title}</p>
                    </div>
                    <CollectionButton items={item}/>
                </div>
            ))
        }
    </div>
  )
}

export default Collection