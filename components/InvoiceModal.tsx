"use client"

import React from 'react'
import { Plus } from 'lucide-react'


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
import useInvoiceModal from '@/app/hooks/useInvoiceModal'
import FormComponet from './Form'
import DeleteModal from './DeleteModal'
import useDeleteModal from '@/app/hooks/useDeleteModal'

const InvoiceModal = () => {
    const inVoiceModal =useInvoiceModal()
    const deleteModal =useDeleteModal()

  return (
    <>
    <DeleteModal
      actionText='Discard'
      body='discard'
      action={inVoiceModal.onClose}
      secondaryAction={deleteModal.onClose}
    />
    <Dialog open={inVoiceModal.isOpen} onOpenChange={inVoiceModal.onClose}> 
    <DialogTrigger asChild>
        
    </DialogTrigger>
    <DialogContent className="sm:max-w-[900px] h-[95vh] ">
      <DialogHeader>
        <DialogTitle className='flex items-center gap-2 text-2xl'>New Invoice <Plus /></DialogTitle>
        <DialogDescription className='text-left'>
          Fill the neccessary information below
        </DialogDescription>
      </DialogHeader>
        <FormComponet />
      <DialogFooter>

      
      </DialogFooter>
    </DialogContent>
  </Dialog>
    </>
    
  )
}

export default InvoiceModal