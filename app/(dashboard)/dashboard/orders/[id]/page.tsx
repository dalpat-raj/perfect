import OrderDetail from '@/app/ui/dashboard/orders/orderDetails/OrderDetail'
import { OrderDetailsSkeleton } from '@/app/ui/skeletons';
import React, { Suspense } from 'react'


const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
   <Suspense fallback={<OrderDetailsSkeleton/>}>
      <OrderDetail id={id}/>
   </Suspense>
  )
}

export default page