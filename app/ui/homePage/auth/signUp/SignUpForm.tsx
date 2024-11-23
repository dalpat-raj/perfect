"use client";
import React, {useState, useTransition} from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
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
import { RegisterSchema } from "@/schema";
import { Register } from "@/action/auth";
import ButtonWithSpinner from "@/app/ui/button/ButtonWithSpinner";

const SignUpForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(()=>{
      Register(values)
      .then((data)=>{
        setError(data.error);
        setSuccess(data?.success)
      })
    })
    
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex justify-between flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({field})=>(
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="John Doe"
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
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
      </div>
      <div className="my-4">
      <FormError message={error}/>
      <FormSuccess message={success}/>
      <div className='w-full h-10'>
        <ButtonWithSpinner loading={isPending}>
          Create an account
        </ButtonWithSpinner>
      </div>
      </div>
    </form>
  </Form>
  );
};

export default SignUpForm;