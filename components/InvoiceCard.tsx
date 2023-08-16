"use client"

import { format } from 'date-fns'
import React from 'react'

const InvoiceCard = ({item}) => {
    const totalPrice = item.items.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
    const totalTax = item.items.reduce((total, item) => total + (Number(item.tax)), 0);

    const result = totalPrice / totalTax;

    const getStatusColor = (status: string) => {
        switch (status) {
          case "paid":
            return "bg-green-200 text-green-600";
          case "unpaid":
            return "bg-red-200 text-red-600";
          default:
            return "bg-yellow-200 text-yellow-600 ";
        }
      };
      
  return (
    <div className='flex gap-4 justify-between items-center'>
        <div>
            #{item.idNo}
        </div>
        <div>
            {format(new Date(item.dueDate), 'MMM d, yyy')}
        </div>
        <div>
            {item.clientName}
        </div>
        <div>jj</div>
        <div>{result}</div>
        <div  className={`px-4 py-2 capitalize rounded-md ${getStatusColor(item.status)}`}>
            {item.status}
        </div>
        <div>
       
        </div>
    </div>
  )
}

export default InvoiceCard