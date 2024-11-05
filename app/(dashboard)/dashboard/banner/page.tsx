import React from 'react'
import Banner from '@/app/ui/dashboard/banner/Banner'
import { getBanner } from '@/lib/data';


const page = async() => {
  const banners = await getBanner();
  return (
    <Banner banners={banners}/>
  )
}

export default page