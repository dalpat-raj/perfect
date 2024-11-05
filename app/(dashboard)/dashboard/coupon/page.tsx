import Coupon from '@/app/ui/dashboard/coupon/Coupon'
import LoaderBall from '@/app/ui/loader/BallLoader'
import React, { Suspense } from 'react'



const page = () => {
  return (
      <Suspense fallback={<LoaderBall/>}>
        <Coupon/>
      </Suspense>
  )
}

export default page