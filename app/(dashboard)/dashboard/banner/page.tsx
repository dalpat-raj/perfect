import React from 'react'
import Banner from '@/app/ui/dashboard/banner/Banner'
import { getBanner } from '@/lib/data';

type Props = {}

const page = async(props: Props) => {
  const banners = await getBanner();
  return (
    <Banner banners={banners}/>
  )
}

export default page