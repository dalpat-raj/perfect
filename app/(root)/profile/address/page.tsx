
import Addresses from '@/app/ui/homePage/profile/address/Address'
import { getCurrentUser } from '@/lib/data'
import React from 'react'


const page = async() => {
  const user = await getCurrentUser();
  
  return (
    <Addresses user={user}/>
  )
}

export default page