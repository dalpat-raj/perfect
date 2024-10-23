import Products from '@/app/ui/product/Products'
import { CollectionDataSkeletons } from '@/app/ui/skeletons'
import React, { Suspense, useEffect } from 'react'

type Props = {}

const page = (props: Props) => {

  
  return (
    <div className='w-full my-8 max-md:my-4 px-12 max-md:px-4 max-sm:px-2'>
        <Products titles={""}/>
    </div>
  )
}

export default page