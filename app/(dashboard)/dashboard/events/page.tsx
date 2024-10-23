import Event from '@/app/ui/dashboard/event/Event'
import LoaderBall from '@/app/ui/loader/BallLoader'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={<LoaderBall/>}>
      <Event/>
    </Suspense>
  )
}

export default page