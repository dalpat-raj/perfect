import { Review } from '@/lib/definations'
import ReviewsCard from '@/app/ui/dashboard/reviews/ReviewsCard'

const ReviewsUi = ({reviews}: {reviews: Review[]}) => {


    return (
        <div className='p-4 mt-4'>
            {
                reviews?.map((item,i)=>(
                    <div key={i}>
                        <ReviewsCard reviews={item}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ReviewsUi;
