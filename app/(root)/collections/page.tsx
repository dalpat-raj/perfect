import Collections from '@/app/ui/collections/Collections'
import { CollectionsSkeletons } from '@/app/ui/skeletons';
import { getCollections } from '@/lib/data';
import React, { Suspense } from 'react'

type Props = {}

const page = async (props: Props) => {
  
  return (
    <div className='w-full my-12 max-md:my-8 max-sd:my-4 px-12 max-md:px-4 max-sm:px-2'>
        <Suspense fallback={<CollectionsSkeletons/>}>
          <Collections/>
        </Suspense>
    </div>
  )
}

export default page