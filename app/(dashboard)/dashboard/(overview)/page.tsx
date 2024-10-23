import React, { Suspense } from 'react'
import CardWrapper from '@/app/ui/dashboard/overView/cards'
import { CardsSkeleton, ChartjsSkeleton, DashboardSkeleton } from '@/app/ui/skeletons'
import RevenueChart from '@/app/ui/dashboard/overView/RevenueChart'
import { RingChart } from '@/app/ui/dashboard/overView/ChartProgress'

type Props = {}

const page = (props: Props) => (
  <main className='h-full bg-white  p-4 mt-4 overflow-scroll no-scrollbar'>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>

    <div className="mt-8 grid grid-cols-6 gap-6">
      <div className="w-full col-span-4 ">
        <Suspense fallback={<ChartjsSkeleton />}>
          <RevenueChart />
        </Suspense>
      </div>
      <div className='col-span-2'>
        <div className=''>
          <RingChart />
        </div>

      </div>
    </div>

  </main>
)

export default page