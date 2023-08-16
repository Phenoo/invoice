"use client"

import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children }) => {
  return (
    <div className='px-4 sm:px-6 md:px-8 py-4'>
        {children}
    </div>
  )
}

export default Container