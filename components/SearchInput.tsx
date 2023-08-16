"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'


const SearchInput = () => {
  return (
    <div className='w-[300px] md:w-[330px] flex items-center  rounded-md px-4 bg-slate-200'>
        <Search className='opacity-70' />
         <input type="text" placeholder="Search Invoice" 
         className='w-full border-none outline-none focus:outline-none focus-within:outline-none p-3 bg-transparent'  />
    </div>
  )
}

export default SearchInput