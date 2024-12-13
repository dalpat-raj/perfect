import React, { useState } from 'react'
import { ImageSkeleton } from '@/app/ui/skeletons';
import Image from 'next/image';

const ProdImg = ({item}: {item: string}) => {
    const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className='w-[60px] h-[70px]'>
        {imageLoading && <ImageSkeleton/>}
        <Image
        src={item}
        alt={item}
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height: '100%', objectFit: 'cover' }}
        onLoad={()=>setImageLoading(false)}
        />
    </div>
  )
}

export default ProdImg