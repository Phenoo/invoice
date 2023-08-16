"use client"

import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


const TableItem = ({items}) => {
  const totalPrice = items.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
  const totalTax = items.reduce((total, item) => total + (Number(item.tax)), 0);
  
  const result = totalPrice * (totalTax/100);

  return (
    <div className='my-8'>

    <Table>
    <TableCaption></TableCaption>
    <TableHeader>
      <TableRow className='bg-primary text-primary'>
        <TableHead className="w-[60px]">#</TableHead>
        <TableHead className=""> Name</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead className="text-right">Tax</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items?.map((invoice, i) => (
        <TableRow key={invoice.invoice}>
          <TableCell className="font-medium">{i + 1}</TableCell>
          <TableCell className="font-medium">{invoice.name}</TableCell>
          <TableCell>{invoice.quantity}</TableCell>
          <TableCell>
          {
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(invoice.price)
          }
          </TableCell>
          <TableCell className="text-right">{invoice.tax}%</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

    <div className='w-full flex items-center gap-4 justify-end text-right my-2'>
      <div className='w-[100px]  capitalize font-bold'>
        subtotal
      </div>
      <div>
        {
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)
        }
      </div>

      
      </div>
      <div className='w-full flex items-center gap-4 justify-end  text-right my-2'>
        <div className=' capitalize font-bold'>
          tax
        </div>
        <div className='w-[100px] capitalize'>
        {totalTax}%
        </div>
        
      </div>
      <div className='w-full flex items-center gap-4 justify-end text-right my-2'>
        <div className='w-[100px] capitalize font-bold'>
          total
        </div>
        <div className='w-[100px] capitalize'>
          {
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(result)
        }
        </div>
      </div>

      
  </div>

  )
}

export default TableItem