"use client"

import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ModeToggle } from '../Switch'

import { SafeUser } from '@/app/types'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { Button } from './button'
import { signOut } from 'next-auth/react'


interface UserProps{
  currentUser?: SafeUser | null 
  image?: string | null
}

const Usernav:React.FC<UserProps> = ({
  currentUser, image
}) => {
  return (
    <div className='flex items-center gap-4'>
      <ModeToggle />

      <Popover>
        <PopoverTrigger className='flex gap-4 border items-center p-2 rounded-md'>
          <Avatar>
            
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            Desco4PF
          </div>
        </PopoverTrigger>
        <PopoverContent> 
          <div className='flex items-center gap-4 mb-4'> 
            <div>
              <Image src={currentUser?.image!} alt='user' width={50} height={50} className='rounded-full'/>
            </div>
            <div>
              <div>{currentUser?.name}</div>
              <div className='text-xs text-gray-400'>
                Desco</div>
            </div>
          </div>
          <Button className='bg-red-500' onClick={() => signOut()}>Sign Out</Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Usernav