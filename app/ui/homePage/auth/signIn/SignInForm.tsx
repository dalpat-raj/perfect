"use client";
import React, {useState, useTransition} from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { LoginSchema } from "@/schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Login } from "@/action/auth";
import Link from "next/link";

const SignInForm = () => {
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get("callbackUrl");
  const urlError = searchParam.get("error") === "OAuthAccountNotLinked" ? "Email already in use with diffrent provider" : "";
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("");
    
    startTransition(()=>{
      Login(values, callbackUrl)
      .then((data)=>{
        setError(data?.error);
        setSuccess(data?.success)
      })
    })
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({field})=>(
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="raj.example@gmail.com"
                    required
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field})=>(
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="********"
                    type="password"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Link href="/auth/reset" className="text-[13px] ">Forgot Password</Link>
        </div>
        <div className="mt-4">
          <FormError message={error || urlError}/>
          <FormSuccess message={success}/>
          <button
            disabled={isPending}
            type="submit"
            className={`${
              isPending ? "bg-gray-600" : "bg-[#333]"
            } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
          >
            {isPending ? "Loading..." : "Sign in"}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;




// <div>
//       <form onSubmit={form.handleSubmit(() => {})} className="w-full flex flex-col gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-600">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Email"
//             id="Email"
//             name="email"
//             className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-300 bg-white text-sm text-gray-700"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-600">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             id="password"
//             className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-300 bg-white text-sm text-gray-700"
//           />
//         </div>
//         <div className="mt-4">
//           <AuthButton />
//         </div>
//       </form>
//     </div>