'use client'
import React, { useState } from 'react'
import { editCollction } from '@/action/collection';
import Label from '../../label/Label';
import Image from 'next/image';
import { IoCamera } from 'react-icons/io5';
import { UploadButton } from '@/lib/uploadthing';
import { RxCross1 } from 'react-icons/rx';
import ButtonWithSpinner from '../../button/ButtonWithSpinner';
import { ImageSkeleton } from '../../skeletons';
import { toast } from 'sonner';

type Collction = {
    id: number,
    title: string,
    image: string | null,
}

const CollectionEdit = ({items}: {items:Collction}) => {   
    const [editBoxOpen, setEditBoxOpen] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<string>(items?.image ? items?.image: '')
    const [uploading, setUploading] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);


    const handleUploadProgress=()=>{
        setUploading(true)
      }
    
      const handleUploadComplete = (res: any) => {
        if (res) {
          const urls = res.map((file: { url: string }) => file.url);
          setImage(urls[0])
          setUploading(false)
          return urls
        }
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setIsLoading(true)
        const formData = new FormData(event.currentTarget); 
        try {
          const res = await editCollction(items?.id, image, formData);
          if(res.success) toast.success(res.success)
          if(res.error) toast.error(res.error)
        } catch (error) {
          toast.error('Error submitting form:');
        } finally {
            setIsLoading(false) 
            setEditBoxOpen(false)
            setImage('')
          }
      };



      const closeEditBox = () => {
        setEditBoxOpen(false);
    };

      return (
        <div className='flex gap-8 items-center'>
            
            <button onClick={()=>setEditBoxOpen(true)} className='text-[14px] font-semibold text-white bg-[#333] h-8 px-4 rounded-sm'>Edit</button>
    
            {editBoxOpen && (
                <div
                    className='w-full h-[100vh] fixed top-0 left-0 bg-blackOverlay'
                    onClick={closeEditBox} // Close on background click
                >
                    <div className='z-50' onClick={(e) => e.stopPropagation()}> 
                        <div className='p-6 max-sm:p-0 flex justify-center items-center'>
                            <div className='w-2/4 max-sm:w-full bg-white shadow-custom-shadow p-6'>
                                <div className='w-full flex justify-between items-center'>
                                    <h2 className={`text-[20px] font-bold text-gray-600`}>Update Collections</h2>
                                    <div onClick={closeEditBox} className='cursor-pointer'>
                                        <RxCross1 size={20} />
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-span-1">
                                            <Label htmlFor="title" title='Title' />
                                            <input
                                                name="title"
                                                id="title"
                                                placeholder="Enter case description"
                                                className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                                                defaultValue={items?.title}
                                            />
                                        </div>
                                        <div className="col-span-1 my-4">
                                            <div className='mb-3 flex justify-start items-center gap-4'>
                                                <div className='relative'>
                                                    <div className='w-[45px] h-[45px] text-[14px] font-normal py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400 opacity-0 absolute z-10 cursor-pointer'>
                                                        <UploadButton
                                                            endpoint="bannerImage"
                                                            onClientUploadComplete={handleUploadComplete}
                                                            onUploadError={(error) => console.error("Upload error:", error)}
                                                            onUploadProgress={handleUploadProgress}
                                                        />
                                                    </div>

                                                    {uploading ? (
                                                        <div className='w-[65px] h-[65px] flex justify-center items-center'>
                                                            <ImageSkeleton/>
                                                        </div>
                                                    ) : image ? (
                                                        <div className='w-[65px] h-[65px] border border-gray-200'>
                                                            {imageLoading && <ImageSkeleton/>}
                                                            <Image
                                                                src={image}
                                                                alt='collection'
                                                                width={0}
                                                                height={0}
                                                                sizes='100vw'
                                                                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                                                onLoad={()=>setImageLoading(false)}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className='w-[45px] h-[45px] bg-gray-100 text-gray-300 flex justify-center items-center'>
                                                            <label htmlFor="message" className='cursor-pointer'>
                                                                <IoCamera size={28} />
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                                <label htmlFor="message" className='text-[14px] font-semibold'>
                                                    <p className='text-[14px] font-semibold'>Upload Photos</p>
                                                    <small className='text-gray-300'>Accept .jpg, .png and max 10MB each</small>
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className='w-full h-8'>
                                            <ButtonWithSpinner loading={isLoading}>Update</ButtonWithSpinner>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollectionEdit