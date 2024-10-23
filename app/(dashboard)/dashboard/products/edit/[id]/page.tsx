import React from 'react'
import { getProductDetails } from '@/lib/data'
import CreateProductForm from '@/app/ui/dashboard/products/CreateProductForm'


const page = async ({ params }: { params: { id: string } }) => {
    
  const product = await getProductDetails(params.id)
    
  return (
    <div>
        <CreateProductForm product={product }/>
    </div>
  )
}

export default page