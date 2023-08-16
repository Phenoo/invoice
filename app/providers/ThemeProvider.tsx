"use client"

import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

interface NextThemeProps {
    children: React.ReactNode
}
const NextThemeProvider:React.FC<NextThemeProps> = ({children}) => {
    const [isMounted, setIsMounted] =useState(false)

    useEffect(() => {
        setIsMounted(true)
    })
    
    if(!isMounted){
        return null;
    }
  return (
    <ThemeProvider >
        {children}
    </ThemeProvider>
  )
}

export default NextThemeProvider