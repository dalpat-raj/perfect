'use client'
import { deleteProduct } from '@/action/product'
import { Product } from '@/lib/definations'
import { formatDate } from '@/lib/formDatePage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import LoaderBall from '../../loader/BallLoader'

type Props = {
    product: Product
}

const ProductsCard = ({product}: Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const img1 = product.images[0]
    const img2 = product.images[1]
    const img3 = product.images[2]

    const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setLoading(true)
        const formData = new FormData(event.currentTarget); 
        try {
          await deleteProduct(formData);     
        } catch (error) {
          console.error('Something went wrong', error);
        } finally {
          setLoading(false)
        }
    }

    if(loading){
        return <LoaderBall/>
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
        <div className='text-[14px] col-span-1 text-gray-600 max-sm:hidden flex items-center gap-2'>
            <button className='text-[13px] text-white bg-blackOverlay py-1 px-2 rounded-sm'>
            <Link href={`/dashboard/products/edit/${product?.id}`}>
                <CiEdit size={20} />
            </Link>
            </button>
            <form onSubmit={handleDelete}>
             <input type="text" name='id'  defaultValue={product.id} className='hidden'/>
             <button type='submit' className='text-[13px] text-white bg-blackOverlay py-1 px-2 rounded-sm'>Delete</button>
            </form>
        </div>
    </div>
  )
}

export default ProductsCard