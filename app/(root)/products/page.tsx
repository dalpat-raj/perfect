import dynamic from 'next/dynamic'
import { ProductFilterSkeletons } from '@/app/ui/skeletons'
const Products = dynamic(()=> import('@/app/ui/product/Products'), {loading: ()=><ProductFilterSkeletons/>}) 

const page = () => {

  
  return (
    <div className='w-full my-8 max-md:my-4 px-12 max-md:px-4 max-sm:px-2'>
        <Products titles={""}/>
    </div>
  )
}

export default page