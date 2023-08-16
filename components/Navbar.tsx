"use client "

import React from 'react'
import Usernav from './ui/user-nav'
import { SafeUser } from '@/app/types'

interface NavbarProps {
  currentUser?: SafeUser | null 
}

const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
  return (
    <div className='flex items-center justify-between pt-8 px-4'>
        <div>
            <div className='text-3xl font-bold'>
                Invoices
            </div>
        </div>
        <Usernav currentUser={currentUser} image={currentUser?.image} />
    </div>
  )
}

export default Navbar