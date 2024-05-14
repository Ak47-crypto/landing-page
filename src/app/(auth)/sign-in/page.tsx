'use client'
import { useEffect, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { Loader2, KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react";
import Link from "next/link";

const signInSchema=z.object({
    identifier:z.string().email({message:"valid email required"}),
    password:z.string().min(6,{message:"min 6 characters required"})
})
export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  })
  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true)
    try {
      const result = await signIn('credentials', {
        redirect: false,
        identifier: data.identifier,
        password: data.password
      })
      console.log(result);

      if (result?.error) {
        if (result?.error === 'CredentialsSignin') {
          toast({
            title: 'Message',
            description: 'Invalid email/password'
          })
          form.setValue('password', '')
          form.setValue('identifier', '')
        }
        else {
          toast({
            title: 'Message',
            description: result?.error,
            variant: 'destructive'
          })

          form.setValue('password', '')
          form.setValue('identifier', '')
        }
      }

      if (result?.url) {
        toast({
          title: 'User Logged In',
          description: 'logged in successfully',
          variant: 'default'
        })
        router.replace('jokes')
      }

    } catch (error) {
      console.log(error, 'i am error')
    } finally {
      setIsSubmitting(false)
    }

  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white
rounded-lg shadow-md m-2 mb-20">


        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-5xl mb-6">Welcome back GenAI</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl >
                    <Input placeholder="email" type="text" {...field}
                      required
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="mt-1">Password</FormLabel>
                    
                  </div>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button type="submit" variant={'default'} disabled={isSubmitting}>
              {
                isSubmitting ? <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait
                </> : 'Sign In'
              }
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p className="mb-2">
            Not a member yet?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  )
}
