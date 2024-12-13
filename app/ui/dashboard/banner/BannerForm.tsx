import { createBanner } from "@/action/banner"
import Label from "../../label/Label";
import { useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { caveat } from "@/app/ui/Fonts";
import { toast } from "sonner";
import { ImageSkeleton } from "@/app/ui/skeletons";
import ButtonWithSpinner from "@/app/ui/button/ButtonWithSpinner";

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export function BannerForm({setOpen}: Props) {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState<string[]>([])
    const [imageLoading, setImageLoading] = useState(true);

    
    const handleUploadComplete = (res: any) => {
    if (res) {
        const urls = res.map((file: { url: string }) => file.url);
        setImages(urls)
        return urls
    }
    };

    const handleSubmit=async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        try {
            const bannerAddAction = createBanner.bind(null, images);
            const data = await bannerAddAction(formData);
            if(data?.success) toast.success(data.success)
            if(data?.error) toast.error(data.error)
        } catch (error: any) {
            console.log(error?.message);
            toast.error('Error submitting form 😢')
        } finally {
            setOpen(false)
            setLoading(false)
        }
    }

    const handleChange=()=>{
        setImages([])
    }

  return (
   <div className="w-full h-full flex justify-center items-center">
        <div className="w-2/4 max-sm:w-5/6 bg-white shadow-custom-shadow rounded-md p-6">
        <div className="w-full flex justify-between items-center">
            <h4 className={`${caveat.className} text-[26px] font-bold text-gray-700`}>Create Banner</h4>
            <div onClick={()=>setOpen(false)} className="cursor-pointer"><RxCross1 size={20}/></div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="my-4">
            <Label htmlFor="url" title="URL" />
                <input 
                type="text"
                id="url" 
                placeholder="/products/product-name"  
                name="url" 
                required 
                className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500' />
            </div>
      
            <div className="my-4">
            {
                images?.length >= 1 ? (
                    <div className="border border-gray-200 p-2">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-gray-600 text-[14px] font-semibold">Images</p>
                            <button onClick={handleChange} className="rounded-lg bg-gray-700 text-white text-[14px] px-2 py-1">Change</button>
                        </div>
                        <div className="">
                            {
                                images.map((img,i)=>(
                                    <div className="w-full h-[250px] rounded-sm" key={i}>
                                        {imageLoading && <ImageSkeleton/>}
                                        <Image
                                        src={img}
                                        alt={img}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        onLoad={()=>setImageLoading(false)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <UploadDropzone
                            endpoint="bannerImage"
                            onClientUploadComplete={handleUploadComplete} // This handles multiple uploads
                            onUploadError={() => {
                                toast.success("Upload error ❌")                        
                              }}
                        /> 
                    </div>
                )
            }
            </div>
      
            <div className="w-full h-8">
                <ButtonWithSpinner loading={loading}>
                    Create Banner
                </ButtonWithSpinner>
            </div>
        </form>
        </div>
   </div>
  )
}
