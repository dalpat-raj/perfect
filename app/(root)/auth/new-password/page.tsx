import NewPasswordForm from '@/app/ui/homePage/auth/newPasswordForm/NewPasswordForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-6 px-2">
      <div className="w-3/12 max-lg:w-5/12 max-sm:w-full h-auto p-4 shadow-custom-shadow rounded-md">
        <section className="text-left">
          <h4 className="leading-none text-[18px] font-bold text-gray-600 capitalize">Enter New Password</h4>
          <p className="text-[12px] text-gray-500">Choose strong password</p>
        </section>

        <section>
        <NewPasswordForm/>
        </section>
        <p className="mt-4 text-[14px]">if not have a account <Link href={"/auth/sign-in"}><u>Sign In</u></Link></p>
      </div>
      
    </div>
    
  )
}

export default page