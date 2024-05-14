'use client'
import React from 'react'
import {useChat} from 'ai/react'
import { Input } from '@/components/ui/input';
import Markdown from '@/components/Markdown';
import Navbar2 from '@/components/Navbar2';
import { Send,User,Bot,Loader2 } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Jokes() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/jokes",
    });

    
  return (
    <div>
        <Navbar2/>
        {/* input area */}
        <div className='flex justify-center mt-20'>
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit(e,{data:{prompt:input}})}}>
            <div className='flex w-full md:w-[330px] justify-center items-center gap-2'>
        <Input  disabled={isLoading} placeholder='ask something...' type='text' className='w-full border rounded-3xl text-[#5dabc7] placeholder:text-[#5dabc7] focus:placeholder-transparent text-right ' value={input} onChange={handleInputChange} />
        <button type='submit'className='inline rounded-full shadow-md border flex flex-row' >
            {isLoading?<Loader2 className="p-2 h-9 w-10 stroke-stone-500 animate-spin" onClick={stop}/>:
        <Send className="p-2 h-9 w-10 stroke-stone-500 " />}
        </button>
        </div>
        </form>
        </div>
        {/* text area */}
        <div className='flex  justify-center mt-10'>
                {/* <Textarea 
                    className='h-screen'
                    placeholder={JSON.stringify(messages)}
                /> */}
                <div className='flex flex-col-reverse px-4 md:p-10'>
                    {messages.map((msg,index)=>(
                        
                        <div>
                            <div className='flex gap-4 item-center w-full md:w-[780px] mb-5'>
                                {msg.role=='user'?<User className='m-auto'/>:<Bot className='m-auto'/>}
                                
                            <Card className={`w-full ${msg.role=='user'?'bg-slate-300':''}`}>
                                <CardHeader>
                                    <CardContent>
                                        <Markdown text={msg.content}/>
                                    </CardContent>
                                </CardHeader>
                            </Card>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}
