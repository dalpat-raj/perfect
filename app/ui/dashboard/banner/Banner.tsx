'use client'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { caveat } from '../../Fonts'
import { BannerForm } from './BannerForm'
import LoaderBall from '../../loader/BallLoader'
import Image from 'next/image'
import { BannerData } from '@/lib/definations'
import { CiEdit } from 'react-icons/ci'
import { DeleteBanner } from '@/action/banner'
import { EditForm } from './EditFrom'

type Props = {
  banners: BannerData[],
}

const Banner = ({banners}: Props) => {
  const [editData, setEditData] = useState<BannerData>();
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete=async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setEditOpen(false)
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    try {
      const data = await DeleteBanner(formData)
    } catch (error) {
        console.error('Error submitting form:', error);
    } finally {
        setLoading(false)
    }
}

  if(loading){
    return <LoaderBall/>
  }
  return (
    <div className='px-4 my-4 relative'>
        <div className='my-4 text-center flex justify-between items-center'>
            <h2 className={`${caveat.className} text-[27px] font-bold`}>Our Collections</h2>
            <button onClick={()=>setOpen(!open)} className='flex justify-center items-center gap-2 rounded-lg bg-gray-500 text-white text-[14px] px-2 py-1'><FaPlus size={16}/>Add banner</button>
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
          {
            banners.map((item, i)=>(
            <div className='col-span-1 shadow-custom-shadow rounded-md overflow-hidden' key={i}>
              <Image
                src={item.images[0]}
                alt={item.url}
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '100%', height: 'auto' ,objectFit: 'cover'}}
              />
              <div className='flex justify-between items-center py-4 px-2'>
              <p className='text-[14px] font-semibold'>Url- <span className='text-gray-600'>{item.url}</span></p>
              <div className='flex items-center gap-2'>
              <button onClick={()=>{setEditData(item); setEditOpen(true)}} className='text-[13px] text-white bg-blackOverlay py-1 px-2 rounded-sm'>
                  <CiEdit size={20} />
              </button>
              <form onSubmit={handleDelete}>
              <input type="number" defaultValue={item?.id} name="id" className='hidden'/>
              <button type='submit' className='text-[13px] text-white bg-blackOverlay py-1 px-2 rounded-sm'>Delete</button>
              </form>
              </div>
              </div>
              </div>
            ))
          }
        </div>

        <div>
        </div>

        {
          open && (
            <div className='w-full h-screen fixed top-0 left-0 bg-blackOverlay'>
              <BannerForm setOpen={setOpen} setLoading={setLoading}/>
            </div>
          )
        }
        {
          editOpen && (
            <div className='w-full h-screen fixed top-0 left-0 bg-blackOverlay'>
              <EditForm editData={editData} setEditOpen={setEditOpen} setLoading={setLoading}/>
            </div>
          )
        }
    </div>
  )
}

export default Banner