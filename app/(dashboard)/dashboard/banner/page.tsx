import dynamic from 'next/dynamic';
import LoaderBall from '@/app/ui/loader/BallLoader';
const Banner = dynamic(()=> import('@/app/ui/dashboard/banner/Banner'), {loading: ()=> <LoaderBall/>})
import { getBanner } from '@/lib/data';


const page = async() => {
  const banners = await getBanner();
  return (
    <Banner banners={banners}/>
  )
}

export default page