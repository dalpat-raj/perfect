import Coupon from '@/app/ui/dashboard/coupon/Coupon'
import LoaderBall from '@/app/ui/loader/BallLoader'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
      <Suspense fallback={<LoaderBall/>}>
        <Coupon/>
      </Suspense>
  )
}

export default page