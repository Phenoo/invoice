"use client"

import React from 'react'
import Logo from './Logo'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'


const Sidebar = () => {
  return (
    <aside className='hidden md:block bg-slate-300 fixed inset-0 h-screen w-52  py-8 px-4'>
        <div className='flex justify-between flex-col h-full w-full items-center'>
            <Logo />
            <div onClick={() => signOut()}className='w-full flex items-center justify-center gap-2 capitalize text-red-500 text-sm text-center'>
               <span> log out</span> <LogOut />
            </div>
        </div>
    </aside>
  )
}

export default Sidebar