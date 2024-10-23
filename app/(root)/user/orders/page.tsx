import Orders from '@/app/ui/homePage/orders/Orders'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full my-8 max-md:my-4 px-12 max-md:px-4 max-sm:px-2'>
      <Orders/>
    </div>
  )
}

export default page