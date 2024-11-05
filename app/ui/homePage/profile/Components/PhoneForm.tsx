"use client"
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneSchema } from '@/schema';
import { toast } from 'sonner';
import { PhoneUpdate } from '@/action/user';
import ButtonWithSpinner from '@/app/ui/button/ButtonWithSpinner';

interface UserPhone {
    phone: string,
}

interface UserData {
    userId : string,
    userPhone : string,
}

const PhoneForm: React.FC<UserData> = ({userId, userPhone}) => {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
    const { 
      register, 
      handleSubmit, 
      formState: {errors}, 
    } = useForm<UserPhone>({
      resolver: zodResolver(PhoneSchema),
      defaultValues: {
        phone: userPhone
      }
    })
  
  
    async function handleAddressSubmit(data:UserPhone){
      startTransition(() => {
          PhoneUpdate(data , userId)
        .then((res)=>{
          if (res?.success) toast.success(res.success)
          if(res?.error) toast.error(res.error)
        }).catch(()=>{
          toast.error('Error something wrong 😢');
        }).finally(()=>{
          setOpen(false)
        })
      });
    }
  return (
    <div className='w-2/5 max-lg:w-full'>
        <div className='mb-4 flex items-center gap-6'>
            <h2 className={`text-[18px] font-bold text-gray-800`}>Mobile Number</h2>
            <button onClick={()=>setOpen(!open)} className='text-[16px] font-semibold text-blue-500'>Edit</button>
        </div>
        <form onSubmit={handleSubmit(handleAddressSubmit)}>
            <div className='flex items-end max-sm:flex-col max-sm:items-start gap-6'>
                <div className='w-4/5 max-sm:w-full'>
                    <label htmlFor="phone" className='text-[13px] text-gray-400'>Mobile Number</label>
                    {
                      open ? (
                        <input
                          {...register("phone")} 
                          id="phone"
                          type="number"
                          name='phone'
                          placeholder='+91 00000 00000'
                          className='w-full py-2 px-4 border border-gray-200 bg-white rounded-sm outline-none focus:border-gray-400 text-sm text-gray-500'
                      />
                      ) : (
                        <input
                          {...register("phone")} 
                          id="phone"
                          type="number"
                          name='phone'
                          readOnly
                          placeholder='+91 00000 00000'
                          className='w-full py-2 px-4 border border-gray-200 bg-gray-50 rounded-sm outline-none text-sm text-gray-500'
                      />
                      )
                    }
                    {errors.phone && (
                        <p className='text-red-500 text-[13px]'>{errors.phone.message}</p>
                    )}
                </div>
                <div className='w-1/5 h-9'>
                {
                    open && (
                        <ButtonWithSpinner loading={isPending}>
                            SAVE
                        </ButtonWithSpinner>
                    )
                }
                </div>
            </div>
        </form>
    </div>
  )
}

export default PhoneForm