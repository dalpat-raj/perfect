'use client'
import { createCollction } from '@/action/collection'
import ButtonWithSpinner from '@/app/ui/button/ButtonWithSpinner'
import { caveat } from '@/app/ui/Fonts'
import Label from '@/app/ui/label/Label'
import LoaderBall from '@/app/ui/loader/BallLoader'
import { ImageSkeleton } from '@/app/ui/skeletons'
import { UploadButton } from '@/lib/uploadthing'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { toast } from 'sonner'


const CreateCollection = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<string>('')
    const [imageLoading, setImageLoading] = useState(true);
    


   
    
      const handleUploadComplete = (res: any) => {
        if (res) {
          const urls = res.map((file: { url: string }) => file.url);
          setImage(urls[0])
          return urls
        }
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      setIsLoading(true)
        const formData = new FormData(event.currentTarget); 
        try {
          // const collectionAddActions = createCollction.bind(null, image);
          const res = await createCollction(image, formData);
          if(res.success) toast.success(res.success)
          if(res.error) toast.error(res.error)

        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false) 
            setImage('')
        }
      };

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
            
            {
                image?.length >= 1 ? 
                  <div className="flex justify-start gap-2 items-center my-2 mb-4 overflow-x-scroll no-scrollbar">
                  {
                      <div className='w-[50px] h-[60px]'>
                      { imageLoading && <ImageSkeleton/> }
                      <Image
                      src={image || '/e22.jpg'}
                      alt={`Image ${image + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{width:"100%", height:"100%", objectFit: "cover"}}
                      onLoad={()=>setImageLoading(false)}
                      />
                      </div>
                    
                  }
                </div>
                : <div className="my-2 max-sm:my-4 w-[100%] flex justify-start items-start">
                    <UploadButton
                      className='ut-button:bg-white ut-button:justify-start ut-button:text-gray-600 ut-button:ut-readying:bg-gray-500 ut-allowed-content:ut-ready:text-gray-400'
                      endpoint="bannerImage"
                      onClientUploadComplete={handleUploadComplete}
                      onUploadError={() => {
                        toast.error("select maximum 1 image")                        
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <div className='flex items-center justify-start gap-2'>
                            <div className='bg-gray-100 p-2'><CiImageOn size={25} /></div> 
                            <p>Images</p>
                            </div>
                          return "Getting ready...";
                        },
                        allowedContent({ ready, fileTypes, isUploading }) {
                          if (!ready) return "Checking Wait";
                          if (isUploading) return "image uploading...";
                          return `Choose Images: ${fileTypes.join(", ")}`;
                        },
                      }}
                     />
                  </div> 
              }

            </div>
            <div className='w-full h-8'>
                <ButtonWithSpinner loading={isLoading}>Create</ButtonWithSpinner>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreateCollection