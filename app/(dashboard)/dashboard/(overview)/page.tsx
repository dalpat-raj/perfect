import React, { Suspense } from 'react'
import CardWrapper from '@/app/ui/dashboard/overView/cards'
import { CardsSkeleton, ChartjsSkeleton } from '@/app/ui/skeletons'
import { ChartOrderWrapper } from '@/app/ui/dashboard/overView/RingWrapper'
import RevenueWrapper from '@/app/ui/dashboard/overView/RevenueWrapper'



const page = () => (
  <main className='h-full bg-white  p-4 mt-4 overflow-scroll no-scrollbar'>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>

    <div className="mt-8 grid grid-cols-6 gap-6 max-lg:gap-0 max-lg:grid-cols-1">
      <div className="w-full col-span-4 ">
        <Suspense fallback={<ChartjsSkeleton />}>
          <RevenueWrapper />
        </Suspense>
      </div>
      <div className='col-span-2 max-lg:col-span-1 w-full max-lg:mt-6'>
        <div className='w-full'>
          <ChartOrderWrapper />
        </div>

      </div>
    </div>

  </main>
)

export default page