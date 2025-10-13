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

type Props= {
    type: "login" | "signUp"
}

function AuthForm({type}:Props) {
    const isLoginForm = type === 'login'
    const router = useRouter()

    const handleSubmit =(formData: formData)=>{
        console.log('form Submitted')
    }

    const [isPending, startTransition]=useTransition()
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
                className={`text-blue-500 ${isPending ?"pointer-events-none" :'' }` }>
                    {isLoginForm ? "Sign Up" : "Login" }
                </Link>
            </p>
        </CardFooter>

    </form>
  )
}

export default AuthForm