'use client'
import { deleteProduct } from '@/action/product'
import { Product } from '@/lib/definations'
import Image from 'next/image'
import React, { useTransition } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { formatDate } from '@/lib/helpers'

type Props = {
    product: Product,
}

const ProductsCard = ({product}: Props) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const img1 = product.images[0]
    const img2 = product.images[1]
    const img3 = product.images[2]

    const handleDelete = async (id:number) => {
        startTransition(()=>{
            deleteProduct(id)
            .then((res)=>{
                if(res.success) toast.success(res.success)
                if(res.error) toast.success(res.error)
            }).catch(()=>{
                toast.error('Error submitting form 😢')
            }).finally(()=>{
                router.push("/dashboard/products")
            })
        })
        
    }

  return (
    <div className='grid grid-cols-8 items-center max-sm:grid-cols-4 shadow-custom-shadow rounded-xl mb-4 px-2 py-2'>
        <div className='text-[14px] col-span-2 font-semibold text-gray-600 flex gap-1 items-center max-sm:hidden justify-start'>
            {
                img1 && (
                    <div className='w-[60px] h-[70px]'>
                        <Image
                        src={img1}
                        alt={product.title}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                )
            }
            {
                img2 && (
                    <div className='w-[60px] h-[70px]'>
                        <Image
                        src={img2}
                        alt={product.title}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                )
            }
            {
                img3 && (
                    <div className='w-[60px] h-[70px]'>
                        <Image
                        src={img3}
                        alt={product.title}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                )
            }
        </div>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600'>#{product.id}</div>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600'>{product.sellingPrice}</div>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600 max-sm:hidden'>#{product.collection}</div>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600'>{product.modelNumber}</div>
        <div className='text-[14px] font-semibold col-span-1 text-gray-600'>{formatDate(new Date(product.createdAt))}</div>
        <div className='text-[14px] col-span-1 text-gray-600 max-sm:hidden '>
             <button 
             disabled={isPending}
             type='submit' 
             onClick={()=>handleDelete(product?.id)} 
             className='text-[13px] text-white bg-[#333] py-1 px-2 rounded-sm'>{isPending ? "wait" : "Delete"}</button>
        </div>
    </div>
  )
}

export default ProductsCard