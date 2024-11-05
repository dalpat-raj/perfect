import Profile from '@/app/ui/homePage/profile/Profile'
import { getCurrentUser } from '@/lib/data'
import { UserProfile } from '@/lib/definations'
import React from 'react'


const page = async() => {
  const user = await getCurrentUser();
  
  return (
      <Profile user={user}/>
  )
}

export default page