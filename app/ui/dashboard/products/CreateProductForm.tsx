"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { SelectModel } from "./SelectModel";
import AddFeature from "./AddFeature";
import Input from "../../input/Input";
import Label from "../../label/Label";
import axios from "axios"
import { useRouter } from 'next/navigation'
import type { FormData } from "@/lib/definations";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { toast } from "sonner";


// const productToFormData = async (product: Product): Promise<FormData> => {
//   const fileImages = await Promise.all(
//     product.images.map(async (url) => {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       return new File([blob], url, { type: blob.type });
//     })
//   );

//   return {
//     title: product.title,
//     description: product.description,
//     modelNumber: product.modelNumber,
//     stock: product.stock,
//     originalPrice: product.originalPrice,
//     sellingPrice: product.sellingPrice,
//     collection: product.collection,
//     model: product.model,
//     color: product.color,
//     feature: product.feature,
//     images: fileImages,
//     // map other fields...
//   };
// };

const CreateProductForm = () => {
  
  const [addFeature, setAddFeature] = useState<string>("")
  const [imagesShow, setImagesShow] = useState<string[]>([])
  const [createProduct, setCreateProduct] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData,setFormData] = useState<FormData>({
    title:'',
    description:'',
    modelNumber:'',
    stock: 0,
    originalPrice: 0, 
    sellingPrice: 0,
    collection: '' ,
    model: [],
    color:'#fe345e',
    feature: [],
    images:[],
  })

  const router = useRouter();

  const handleUploadProgress=()=>{
    setUploading(true)
  }

  const handleUploadComplete = (res: any) => {
    if (res) {
      const urls = res.map((file: { url: string }) => file.url);
      setImagesShow(urls)
      setFormData((prevData) => ({
        ...prevData,
        images: [...urls],
      }));
      setUploading(false)
      return urls
    }
  };

  const handleSubmit:React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try{
      setCreateProduct(true);
        
        const response = await axios.post("/api/addProduct",formData)
        if (response) {
          router.push('/dashboard/products')
        } else {
          toast.error("Failed to create product");
        }
      }catch(error: any){
        toast.error(error?.response?.data?.message);
        
      } finally {
        setCreateProduct(false);
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleColllection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFeature: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (addFeature.trim() === '') {
      toast.error("Feature cannot be empty");
      return; // Prevent adding an empty feature
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      feature: [...prevFormData.feature, addFeature],
    }));

    setAddFeature(''); 
  }


  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md mt-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-600 text-center">Make Your Product's</h1>
     
        <div className="grid grid-cols-2 grid-rows-2 gap-4"> 
        <div className="col-span-1">
          <Label htmlFor="title" title="Name" />
          <Input
            type="text"
            name="title"
            id="name"
            placeholder="Enter case name"
            value={formData?.title }
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1">
          <Label htmlFor="description" title="Description"/>
          <Input
            name="description"
            id="description"
            placeholder="Enter case description"
            value={formData?.description }
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1">
          <Label htmlFor="modelNumber" title="Model Number" />
          <Input
            type="text"
            name="modelNumber"
            id="modelNumber"
            placeholder="Model Number"
            value={formData?.modelNumber}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1">
          <Label htmlFor="stock" title={"Stock Quantity"}/>
          <Input
            type="number"
            name="stock"
            id="stock"
            placeholder="How many stock you have"
            value={formData?.stock }
            onChange={handleChange}
          />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-1">
          <Label htmlFor="originalPrice" title="Original Price" />
          <Input
            type="number"
            name="originalPrice"
            id="originalPrice"
            placeholder="original price"
            value={formData?.originalPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-1">
          <Label htmlFor="sellingPrice" title="Selling Price" />
          <Input
            type="number"
            name="sellingPrice"
            id="sellingPrice"
            placeholder="selling price"
            value={formData?.sellingPrice}
            onChange={handleChange}
          />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="collection" title="Collections" />
            <select
              name="collection"
              id="collection"
              value={formData?.collection}
              onChange={handleColllection}
              className="w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none  focus:border-gray-400 text-sm text-gray-500 cursor-pointer"
            >
              <option value="">Collections</option>
              <option value="iphone">iPhone</option>
              <option value="samsung">Samsung</option>
              <option value="oneplus">OnePlus</option>
              <option value="redmi">Redmi</option>
              <option value="oppo">Oppo</option>
              <option value="vivo">Vivo</option>
              <option value="airbuds">Airbuds</option>
              <option value="chargerCabel">Charger Cabel</option>
            </select>
          </div>
          <SelectModel 
            formData={formData }
            setFormData={setFormData}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
         <div>
          <Label htmlFor="color" title="Color" />
          <Input 
            type="text"
            name='color'
            value={formData?.color }
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <Label htmlFor="feature" title="Features" />
          <Input
          type="text"
          name="feature"
          id="feature"
          value={addFeature}
          onChange={(e)=>setAddFeature(e.target.value)}
          />
          <button
          className="absolute right-0 top-6 bg-blue-500 text-white px-4 py-[2.5px] rounded-lg flex gap-2 justify-center items-center"
          onClick={handleFeature}
        >
          <FaPlus size={15}/>
          Add
        </button>
          <div>
            <AddFeature
              formData={formData }
            />
          </div>
        </div>
        </div>

     
      {
        imagesShow?.length >= 1 ? 
          <div className="flex justify-start gap-4 items-center my-2">
          {
            imagesShow?.map((item,i)=>(
              <Image
              src={item}
              alt={`Image ${i + 1}`}
              key={i}
              width={100}
              height={100}
              sizes="100vw"
              style={{width:"100px", height:"100px", objectFit: "cover"}}
              />
            ))
          }
        </div>
         : uploading ? (
            <div className="w-full flex items-center justify-center my-2">
              <button className="m-auto px-4 py-1 rounded-lg bg-blue-500 text-white text-sm">...Uploading</button>
            </div>
            ) : <div className="mt-4">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={handleUploadComplete} // This handles multiple uploads
              onUploadError={(error) => console.error("Upload error:", error)}
              onUploadProgress={()=>handleUploadProgress()}
            />      
          </div> 
      }
      
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
            disabled={createProduct}
          >
          {createProduct ? "Submitting..." : "Create Product"}
        </button> 
        </div>
     
    </div>
  );
}


export default CreateProductForm;



