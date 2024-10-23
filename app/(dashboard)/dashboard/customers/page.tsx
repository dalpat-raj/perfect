import Customer from '@/app/ui/dashboard/customer/Customer'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Suspense fallback="...loading">
      <Customer/>
    </Suspense>
  )
}

export default page