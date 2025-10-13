'use client'

import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { useSonner, toast } from 'sonner'
import { CardContent, CardFooter } from './card'
import { Label } from './label'
import { Input } from './input'
import { Loader2 } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'
import { loginAction, signUpAction } from '@/action/user'

type Props= {
    type: "login" | "signUp"
}

function AuthForm({type}:Props) {
    const isLoginForm = type === 'login'
    const router = useRouter()

    const handleSubmit =(formData: FormData)=>{
        startTransition(async ()=>{
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            let errorMessage
            let title
            let description
            if(isLoginForm){
                errorMessage= (await loginAction(email, password)).errorMessage
                title = "logged in"
                description= "You have been succesfully logged in"
            }else{
                errorMessage= (await signUpAction(email, password)).errorMessage
                title = "Signed up"
                description= "Check your email for a confirmation link"
            }
            if(!errorMessage){
                toast.success(title,
                {description, 
                style:{
                    background: '#ecfdf5', 
                    color: '#065f46', 
                    border: '1px solid #34d399',
                    boxShadow: '0 4px 12px rgba(52, 211, 153, 0.2)',
                      }})
                      router.replace('/') 
            }else{
                toast.error(title,
                {description,
                style: {
                    background: '#fef2f2',
                    color: '#991b1b',      
                    border: '1px solid #f87171', 
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
                }})}
        })
    }

    const [isPending, startTransition]= useTransition()
  return (
    <form action={handleSubmit}>
        <CardContent className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input 
                id='email' 
                name='email' 
                placeholder='john@example.com'
                type='email'
                required
                disabled={isPending}
                >
                </Input>
            </div>
            <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='password'>Password</Label>
                <Input 
                id='password' 
                name='password' 
                placeholder='*******'
                type='password'
                required
                disabled={isPending}
                >
                </Input>
            </div>
        </CardContent>
        <CardFooter className='m-4 flex flex-col gap-6'>
            <Button className='w-full '>
                {isPending ? <Loader2 className='animate-spin'/> 
                :isLoginForm ? "login" : "Sign Up" }
            </Button>
            <p className='text-xs'>
                {isLoginForm ? "don't have an account yet?" : "Aleady have an account?"}{"  "}
                <Link href={isLoginForm ? '/sign-up' : '/login'} 
                className={`text-blue-500 ${isPending ?"pointer-events-none opacity-50" :'' }` }>
                    {isLoginForm ? "Sign Up" : "Login" }
                </Link>
            </p>
        </CardFooter>

    </form>
  )
}

export default AuthForm