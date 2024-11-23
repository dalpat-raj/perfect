"use client";
import React, {useState, useTransition} from "react";
import { z } from "zod";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "@/schema";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { NewPassword } from "@/action/auth";
import { toast } from "sonner"
import ButtonWithSpinner from "@/app/ui/button/ButtonWithSpinner";



const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const token = searchParams.get("token")

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("")
    setSuccess("");

    startTransition(()=>{
        NewPassword(values, token)
      .then((data)=>{
        setError(data?.error)
        if(data?.success){
          router.push("/auth/sign-in")
          toast.success(data?.success)
        }
      })
    })
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-4">
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
                    placeholder="raj.example@gmail.com"
                    required
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          
        </div>
        <div className="mt-4">
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <div className='w-full h-10'>
              <ButtonWithSpinner loading={isPending}>
                Sign in
              </ButtonWithSpinner>
            </div>
        </div>
      </form>
    </Form>
  );
};

export default NewPasswordForm;

