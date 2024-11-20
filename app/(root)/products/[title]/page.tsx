import dynamic from "next/dynamic";
const ProductUi = dynamic(()=> import('@/app/ui/product/productDetails/ProductUi'))


const page = async ({ params }: { params: { title: string } }) => {
  const title = params.title;
  
  return (
    <ProductUi title={title}/>
  )
}

export default page