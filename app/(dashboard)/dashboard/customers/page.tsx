import Customer from '@/app/ui/dashboard/customer/Customer'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback="...loading">
      <Customer/>
    </Suspense>
  )
}

export default page