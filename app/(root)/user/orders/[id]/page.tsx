import OrderDetails from '@/app/ui/homePage/orders/orderDetails/OrderDetails'
import React from 'react'

type Props = {}

const page = ({params} : {params : {id: number}}) => {
    const id = params.id
    
  return (
        <div className='w-full my-8 max-md:my-4 px-12 max-md:px-4 max-sm:px-2'>
      <OrderDetails id={id}/>
    </div>
  )
}

export default page