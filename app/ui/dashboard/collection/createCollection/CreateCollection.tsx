'use client'
import { createCollction } from '@/action/collection'
import { caveat } from '@/app/ui/Fonts'
import Label from '@/app/ui/label/Label'
import LoaderBall from '@/app/ui/loader/BallLoader'
import { UploadButton } from '@/lib/uploadthing'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCamera } from 'react-icons/io5'


const CreateCollection = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<string>('')
    const [uploading, setUploading] = useState(false);
    const [imageUploaded, setImageUploaded] = useState(false);


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
        setImageUploaded(true);
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        event.preventDefault(); 
        const formData = new FormData(event.currentTarget); 
        try {
          const collectionAddActions = createCollction.bind(null, image);
          await collectionAddActions(formData);
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false) 
            setImage('')
            alert("Collction Added")
          }
      };

      if(isLoading) {
        return <LoaderBall/>
      }

  return (
    <div className='p-6 max-sm:p-0 flex justify-center'>
        <div className='w-2/4 max-sm:w-full rounded-md shadow-custom-shadow p-6'>
        <div className='w-full text-center'>
            <h2 className={`${caveat.className} text-[26px] font-bold text-gray-700`}>Create Collections</h2>
        </div>

        <div className='mt-4'>
            <form onSubmit={handleSubmit}>
            <div className="col-span-1">
            <Label htmlFor="title" title="Title"/>
            <input
                name="title"
                id="title"
                placeholder="Enter case description"
                className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none  focus:border-gray-400 text-sm text-gray-500'
            />
            </div>
            <div className="col-span-1 my-4">
            
            <div className='mb-3 flex justify-start items-center gap-4'>
              <div className='relative'>
                <div className='w-[45px] h-[45px] text-[14px] font-normal py-1 px-2 border border-gray-200 rounded-lg focus:outline-gray-400 opacity-0 absolute z-10 cursor-pointer'>
                    <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={handleUploadComplete} // This handles multiple uploads
                    onUploadError={(error) => console.error("Upload error:", error)}
                    onUploadProgress={()=>handleUploadProgress()}
                    disabled={imageUploaded}
                    /> 
                </div>

                {
                    uploading ? (
                        <div className='w-[45px] h-[45px] flex justify-center items-center'>
                            <p className='animate-spin'>1</p>
                        </div>
                    ) : image ? (
                        <div className='w-[45px] h-[45px]  border border-gray-200'>
                          <Image
                            src={image}
                            alt='collection'
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{width: '100%', height: '100%', objectFit: 'contain'}}
                          />
                        </div>
                    ) : (
                        <div className='w-[45px] h-[45px] bg-gray-100 text-gray-300 flex justify-center items-center'>
                          <label htmlFor="message" className='cursor-pointer'>
                            <IoCamera size={28}/>
                          </label>
                        </div>
                    )
                }
              </div>
              <label htmlFor="message" className='text-[14px] font-semibold'>
                <p className='text-[14px] font-semibold'>Upload Photos</p>
                <small className='text-gray-300'>Accept .jpg, .png and max 10MB each</small>
              </label>
              </div>

            </div>
            <div>
                <button className="w-full bg-[#333] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Create</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateCollection