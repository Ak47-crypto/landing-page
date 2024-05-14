'use client'
import React, { useState } from 'react'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const signUpSchema=z.object({
    email:z.string().email({message:"Valid Email is required"}),
    password:z.string().min(6,{message:"minimun 6 character required"})
})
export default function SignsUp() {
  const router = useRouter()
  const { toast } = useToast();
    const [username,setUsername]=useState('')
    const [isSubmitting,setIsSubmitting]=useState(false)
    const form=useForm<z.infer<typeof signUpSchema>>({
        resolver:zodResolver(signUpSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })
    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
      setIsSubmitting(true)
      try {
          const response = await fetch('/api/sign-up', {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(data)
          })
          const data2 = await response.json();
          
          toast({
              title: "Message",
              description: data2.message,
          })
          if(!data2.success){
              form.setValue('password','')
              form.setValue('email','')
              
              
          }
          if (data2.success)
              router.replace('sign-in')
          console.log(data2)
      } catch (error) {
          toast({
              title: "Message",
              description: 'Sign up error',
              variant: "destructive"
          })
      } finally {
          setIsSubmitting(false)
      }

  }
  return (
    <div className="flex justify-center items-center min-h-screen pb-20">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Join GenAI
        </h1>
        <p className="mb-4">Sign up to Experience GenAI</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setUsername(e.target.value);
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />
         

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...field} name="password" />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-full' disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
      </Form>
      <div className="text-center mt-4">
        <p>
          Already a member?{' '}
          <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}
