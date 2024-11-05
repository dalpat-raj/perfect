import OrderDetails from '@/app/ui/homePage/profile/orders/orderDetails/OrderDetails'
import React from 'react'


const page = ({params} : {params : {id: number}}) => {
    const id = params.id
    
  return (
      <OrderDetails id={id}/>
  )
}

export default page