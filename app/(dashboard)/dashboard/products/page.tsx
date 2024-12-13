import LoaderBall from "@/app/ui/loader/BallLoader"
import dynamic from "next/dynamic"

const Products = dynamic(()=> import('@/app/ui/dashboard/products/Products'), {loading: ()=> <LoaderBall/>})

export default function page(){
  return (
      <Products/>
  )
}