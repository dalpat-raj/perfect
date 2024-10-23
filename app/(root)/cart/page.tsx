import Cart from '@/app/ui/homePage/cart/Cart'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full px-12 pr-0 max-md:px-4 max-sm:px-2 overflow-hidden'>
      <Cart/>
    </div>
  )
}

export default page