"use client";
import React, {useState, useTransition} from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { ResetSchema } from "@/schema";
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
import { FormSuccess } from "@/components/form-success";
import { Reset } from "@/action/auth";
import ButtonWithSpinner from "@/app/ui/button/ButtonWithSpinner";

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    }
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("")
    setSuccess("");

    startTransition(()=>{
      Reset(values)
      .then((data)=>{
        setError(data?.error);
        setSuccess(data?.success)
      })
    })
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-4">
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
          
        </div>
        <div className="mt-4">
          <FormSuccess message={success}/>
          <div className='w-full h-10'>
            <ButtonWithSpinner loading={isPending}>
              Next
            </ButtonWithSpinner>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ResetForm;

