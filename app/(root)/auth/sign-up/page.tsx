
import LoginGoogle from "@/app/ui/homePage/auth/signIn/LoginGoogle";
import SignUpForm from "@/app/ui/homePage/auth/signUp/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center my-6 max-sm:px-2">
      <div className="w-3/12 max-lg:w-5/12 max-sm:w-full h-auto p-4 shadow-custom-shadow rounded-md">
        <section className="text-left">
          <h4 className="leading-none text-[18px] font-semibold text-gray-800 capitalize">Create a account</h4>
          <p className="text-[13px] text-gray-500">All Field are required</p>
        </section>
        
        <section>
          <LoginGoogle />
        </section>

        <section className="my-4 text-center grid grid-cols-12 gap-2 items-center">
            <div className="col-span-3 h-[1px] bg-gray-300"></div>
            <p className="col-span-6 text-[13px] font-semibold">OR SIGN-UP WITH</p>
            <div className="col-span-3 h-[1px] bg-gray-300"></div>
        </section>

        <section>
          <SignUpForm />
        </section>
        <p className="mt-4 text-[14px]">if not have a account <Link href={"/auth/sign-in"}><u>Sign In</u></Link></p>
      </div>
      
    </div>
  );
};

export default SignUp;