import { SelectModelProps } from '@/lib/definations'
import React,{useState} from 'react'
import Label from '../../label/Label'

export const SelectModel:React.FC<SelectModelProps>=({ 
  formData,
  setFormData,
})=>{

  const [addModel, setAddModel] = useState<string>()

  interface FormData {
    model: string[];
}
  const handleAddModel:React.MouseEventHandler<HTMLButtonElement>=(e)=>{
    e.preventDefault()
    if(!addModel){
      alert("Please type model name")
    }
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      model: [...prevFormData.model, addModel] // Correctly updating the model array
    }));
    setAddModel("")
  }

  return (
      <>
          <div className='relative'>
          <Label htmlFor="size" title='Add model'/>
          <input 
              type="text"
              className='w-full py-1 px-4 border border-gray-200 bg-white rounded-sm outline-none  focus:border-gray-400 text-sm text-gray-500'
              name='size'
              value={addModel}
              onChange={(e)=>setAddModel(e.target.value)}
              />
              <button onClick={handleAddModel} className='absolute right-0 top-6 bg-blue-500 text-white px-4 py-[2.5px] rounded-lg flex gap-2 justify-center items-center'>Add Model</button>
              <div className='flex justify-start gap-4 mt-2'>
              {
                formData.model.length >= 1 && (
                  formData.model.map((item, i)=>(
                    <button className='px-2 py-[2px] text-[14px] bg-green-800 text-white rounded-lg' key={i}>{item}</button>
                  ))
                )
              }
              </div>
          </div>
      </>
  )
}


