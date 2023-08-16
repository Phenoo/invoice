"use client"
import React from 'react'


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
import useDeleteModal from '@/app/hooks/useDeleteModal'


interface DeleteModalProps {
  body: string;
  actionText: string;
  secondaryAction: () => void;
  action: () => void;
}

const DeleteModal:React.FC<DeleteModalProps> = ({
  body, actionText, action, secondaryAction}) => {
  const { isOpen, onClose, onOpen} =  useDeleteModal()
 


    return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div className='capitalize'>
             {body}
            </div>
          </DialogTitle>
            <hr />
          <DialogDescription>
            This is an irreverible action <br />
            Are you sure you want to {body} ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => {
            secondaryAction()
          }}>Cancel</Button>
          <Button onClick={() => {
            onClose()
            action()
          }}>{actionText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default DeleteModal