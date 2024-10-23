import Reviews from '@/app/ui/dashboard/reviews/Reviews'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback={"...loading"}>
      <Reviews/>
    </Suspense>
  )
}

export default page