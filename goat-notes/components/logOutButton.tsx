'use client'

import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useSonner, toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { logOutAction } from '@/action/user'

function LogOutButton() {

  
  const router = useRouter() // useRouter to access a route inside a function 
    const [loading, setLoading] = React.useState(false) 
    const handleLogout = async() => {
        setLoading(true)
        const {errorMessage} = await logOutAction()

        if(!errorMessage){
          toast.success("Logged out successfully",{description: "You have been logged out", style:{
            background: '#ecfdf5', 
            color: '#065f46', 
            border: '1px solid #34d399',
            boxShadow: '0 4px 12px rgba(52, 211, 153, 0.2)',
          }})
          router.push('/') // automaticly sends to / page when logged out succesfully 
        }else{
          toast.error("Error logging out",{description:"error",
            style: {
              background: '#fef2f2',
              color: '#991b1b',      
              border: '1px solid #f87171', 
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
          }})
        }
          setLoading(false)
      }
  return (
    <Button 
    className='w-24' 
    variant='outline'  
    onClick={handleLogout}>{
        loading ? <Loader2 className='animate-spin'/> : "Log Out"
    }</Button>
  )
}


export default LogOutButton