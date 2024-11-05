import Collection from '@/app/ui/dashboard/collection/Collection'
import LoaderBall from '@/app/ui/loader/BallLoader'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<LoaderBall/>}>
      <Collection/>
    </Suspense>
  )
}

export default page