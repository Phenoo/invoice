"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Textarea } from "@/components/ui/textarea"
  import { Button } from './ui/button'

import { DatePickerDemo } from './Form/Date'
import { PaymentMethod } from './Form/PaymentMethod'
import Currency from './Form/Currency'
import Country from './Form/Country'
import { IoTrashOutline } from 'react-icons/io5'
import axios from 'axios'
import useInvoiceModal from '@/app/hooks/useInvoiceModal'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'
import useDeleteModal from '@/app/hooks/useDeleteModal'
import { useRouter } from 'next/navigation'

  const itemSchema =  z.object({
    name: z.string(),
    quantity: z.string(),
    price: z.string(),
    tax: z.string()
})
  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 2 characters."),
    idNo: z.any(),
    streetAddress: z.string(),
    city: z.string(),
    postCode: z.string(),
    country: z.string(),
    bankAccount: z.string().min(10),
    clientName: z.string(),
    clientEmail: z.string().email(),
    invoiceDate: z.date(),
    status: z.string(),
    currencyCountry: z.string(),
    decription: z.string(),
    items: z.array(itemSchema),
    clientStreetAddress: z.string() ,
    clientCity: z.string(),
    clientPostCode: z.string(),
    clientCountry: z.string(),
    dueDate: z.date()
    // Add more validation for other fields
  });
const FormComponet = () => {
  const inVoiceModal = useInvoiceModal()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

    const { control, handleSubmit, register, setValue, watch } = useForm({
        resolver: zodResolver(formSchema),
      });
      const { fields, append, remove } = useFieldArray({
        control,
        name: 'invoiceItem',
      });



      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          idNo: Math.floor(Math.random() * (9999999999 - 1000000000  + 1)) + 1000000000,
          streetAddress: "",
          city: "",
          postCode: "",
          country: "",
          bankAccount: "",
          clientName: "",
          clientEmail: "",
          invoiceDate: new Date() ,
          status: "",
          currencyCountry: "",
          decription: "",
          clientStreetAddress: "" ,
          clientCity: "",
          clientPostCode: "",
          clientCountry: "",
          dueDate: new Date(),
          items: [{
            name: '',
            quantity: '',
            price: '',
            tax: ''
          }]
        },
    });

    const idNo = watch('idNo')


    const generateRandomNumber = () => {
      const min = 1000000000; // Minimum 10-digit number
      const max = 9999999999; // Maximum 10-digit number
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setValue("idNo", newRandomNumber);
      // setRandomNumber(newRandomNumber)

    };

    

      const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        setIsLoading(true)
        axios.post('/api/invoice', values)
        .then(() => {
          console.log('success')
          toast({
            title: "Success ",
            description: "You have successfully created an invoice",
            action: (
              <ToastAction altText="view">View</ToastAction>
            ),
          })
      })
        .catch((err) => {
          console.log(err.message)
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
      })
      .finally(() => {
        setIsLoading(false)
        inVoiceModal.onClose()
        router.refresh()

      })
      };
      

  return (
    <div className=' w-full h-full space-y-4 pb-12'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <section  className=' bg-gray-300 p-4 md:p-8 pb-12 h-[70vh] overflow-y-auto space-y-4'>
              <div className='text-base font-bold capitalize'>Bill form</div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address </FormLabel>
                    <FormControl>
                      <Input placeholder="Street Address"   {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              

              <div className='flex items-center gap-4'>
                  <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                          <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  
                  <FormField
                  control={form.control}
                  name="postCode"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel> Postal code</FormLabel>
                      <FormControl>
                          <Input placeholder="" type='number'  {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Country </FormLabel>
                      <FormControl>
                          <Country field={field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>

              <FormField
                control={form.control}
                name="bankAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Account </FormLabel>
                    <FormControl>
                      <Input type='number'  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <section className='space-y-4'>
                  <br />
                  <div className='text-base font-bold capitalize mt-4'> 
                      Bill To
                  </div>
                  <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client Name </FormLabel>
                      <FormControl>
                          <Input  {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />   
                  <FormField
                      control={form.control}
                      name="clientEmail"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client Email </FormLabel>
                      <FormControl>
                          <Input type='email' {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />  
                  <FormField
                      control={form.control}
                      name="clientStreetAddress"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client Street Address </FormLabel>
                      <FormControl>
                          <Input  {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />  
                  <FormField
                      control={form.control}
                      name="clientCity"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client City </FormLabel>
                      <FormControl>
                          <Input  {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  /> 
                  <FormField
                      control={form.control}
                      name="clientPostCode"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client Postal Code </FormLabel>
                      <FormControl>
                          <Input  {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                    )}
                  />  
                  <FormField
                      control={form.control}
                      name="clientCountry"
                      render={({ field }) => (
                      <FormItem>
                      <FormLabel> Client Country</FormLabel>
                      <FormControl>
                          <Country  field={field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />  
                  <div className='w-full flex items-start sm:items-center flex-col sm:flex-row gap-4'>
                      <FormField
                          control={form.control}
                          name="invoiceDate"
                          render={({ field }) => (
                          <FormItem>
                          <FormLabel className='block'> Invoice Date </FormLabel>
                          <FormControl>
                              <DatePickerDemo field={field}/>
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                          )}
                      />  
                      <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                          <FormItem>
                          <FormLabel className='block'> Payment Method</FormLabel>
                          <FormControl>
                              <PaymentMethod field={field}/>
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                          )}
                      />  
                  </div>          
              </section>


              <br />
              <section className='space-y-4'>
                    <FormField
                      control={form.control}
                      name="decription"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel className='block'> Project Description </FormLabel>
                          <FormControl>
                              <Textarea {...field} className='bg-white'/>
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                  />  
                  <FormField
                      control={form.control}
                      name="currencyCountry"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel className='block'> Currency </FormLabel>
                          <FormControl>
                              <Currency field={field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                  />  
              
              </section>

              <div className='mb-4 pb-8'>
              <div data-testid="insert-items-container">
                {fields.map((item, index) => {
                  return (
                    <div
                      data-testid={`insert-item-${index}`}
                      className={`${index !== 0 ? 'mt-6' : 'mt-4'}`}
                      key={index} // Use a unique identifier for the key
                    >
                      <div className="grid grid-cols-12 w-full gap-4">
                        <div className='col-span-6'>
                        <FormField
                        control={form.control}
                        name={`items.${index}.name`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='block'> Item Name </FormLabel>
                            <FormControl>
                                    <Input   placeholder={'35625267'} {...field} />
                                  
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
                  
                        </div>
                        <div className='col-span-2'>
                        <FormField
                        control={form.control}
                        name={`items.${index}.quantity`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='block'> Qty </FormLabel>
                            <FormControl>
                                    <Input type='number'  placeholder={'35625267'} {...field}  />
                                  
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
              
                        </div>
                        <div className='col-span-2'>
                        <FormField
                        control={form.control}
                        name={`items.${index}.price`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='block'> Price </FormLabel>
                            <FormControl>
                                    <Input type='number'   placeholder={'35625267'} {...field} />
                                  
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
                        </div>
                        <div className='col-span-2'>
                        <FormField
                        control={form.control}
                        name={`items.${index}.tax`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='block'>Tax </FormLabel>
                            <FormControl>
                                    <Input  type='number' placeholder={'35625267'} {...field} />
                                  
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
                        </div>
                      </div>
        
                      <div className='flex items-end justify-end'>
                        <Button className='bg-transparent text-right  hover:bg-transparent hover:scale-95'
                          onClick={() => remove(index)}
                        >
                          <IoTrashOutline color='black' size={24}/>
                        </Button>
                      </div>
                    </div>
                  )
                })}

              <Button
                data-testid="insert-new-item"
                onClick={() =>
                  append({
                    itemName: '',
                    itemQtty: 1,
                    itemPrice: 0,
                    itemTax: 0,
                  })
                }
                type='button'
              >
                + Add New Item
              </Button>
              </div>
              </div> 

                
              </section>
              <div className='flex items-center gap-4 w-full'>
                <Button disabled={isLoading} onClick={inVoiceModal.onOpen} className='mr-auto bg-red-500 hover:bg-red-300'>
                  Discard
                </Button>
                <Button disabled={isLoading}>
                  Save as draft
                </Button>
                <Button disabled={isLoading} title="create invoice" type='submit' className="bg-[#adf802] text-black hover:bg-[#adf802] hover:opacity-70 border border-black font-bold"> 
                  Create
                </Button>
              </div>
              
            </form>
          </Form>

    </div>
  )
}

export default FormComponet