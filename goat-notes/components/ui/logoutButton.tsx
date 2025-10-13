'use client'

import React from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import { useSonner, toast } from 'sonner'
import { useRouter } from 'next/navigation'

function LogoutButton() {
    // const {toast} = useSonner()
    const router = useRouter()
    const [loading, setLoading] = React.useState(false)
    const handleLogout = async() => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const errorMessage= 'error'

        if(!errorMessage){
          toast.success("Logged out successfully",{description: "You have been logged out", style:{
            background: '#ecfdf5', 
            color: '#065f46', 
            border: '1px solid #34d399',
            boxShadow: '0 4px 12px rgba(52, 211, 153, 0.2)',
          }})
          router.push('/')
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


export default LogoutButton