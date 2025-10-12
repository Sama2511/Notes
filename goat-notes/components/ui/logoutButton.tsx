'use client'

import React from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'

function LogoutButton() {
    const [loading, setLoading] = React.useState(false)
    const handleLogout = () => {
        setLoading(true)
        console.log("logging out...")
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