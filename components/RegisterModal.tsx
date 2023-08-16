"use client"
import React, { useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FcGoogle } from 'react-icons/fc'


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { SafeUser } from '@/app/types'
import { useToast } from './ui/use-toast'


interface RegisterModalProps {
  currentUser?: SafeUser | null
}

const RegisterModal:React.FC<RegisterModalProps> = ({
  currentUser
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose, onOpen} =  useRegisterModal()
  const [isLoading, setIsLoading] = useState(false);
  const { toast} = useToast()

  const { register, handleSubmit, formState: {
    errors
  }} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    setIsMounted(true)
  })

  if(!isMounted){
    return null
  }

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data)

    axios.post('/api/register', data)
    .then(() => {
      console.log('yes')
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }


    return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Username
              </Label>
              <Input id="name" className="col-span-3" 
                {...register("name")}
                required/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input id="email" type='email'  className="col-span-3" 
                  {...register("email")}
                required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Password
              </Label>
              <Input id="password" type='password' className="col-span-3"
                {...register("password")}
                required />
            </div>

          </div>
        </form>
        <Button className='gap-4 text-xl' 
            onClick={() => {
              signIn('google')
              }}>
          Google <FcGoogle />
        </Button>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default RegisterModal