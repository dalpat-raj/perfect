import ReviewsUi from '@/app/ui/dashboard/reviews/Reviews'
import { getReviews } from '@/lib/data'
import React from 'react'


const page = async() => {
  const Allreviews = await getReviews()
  
  return (
     <div>
       <ReviewsUi reviews={Allreviews}/>
     </div>
  )
}

export default page