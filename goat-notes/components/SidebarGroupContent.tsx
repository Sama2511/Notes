'use client'

import { Note } from '@prisma/client'
import React from 'react'

type Props = {
    notes: Note[]
}


function SidebarGroupContent(notes :Props) {
  return (
    <div>SidebarGroupContent</div>
  )
}

export default SidebarGroupContent