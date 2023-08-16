"use client"

import Container from '@/components/Container'
import { format } from 'date-fns'
import React from 'react'
import TableItem from './Table'

const InvoiceClient = ({invoice}) => {
  return (
    <div>
        <Container>
            <div className='flex justify-between items-center'>
                <div>#{invoice.idNo}</div>
                <div>{format(new Date(invoice.invoiceDate), 'MMM d, yyy')}
                
                </div>
            </div>
            <hr className='my-4' />

            <div className='flex justify-between items-center'>
                 <div className='text-left text-sm md:text-base'>
                    <div className='text-xl md:text-2xl font-bold'>
                        Invoice From
                    </div>
                    <div className=' text-gray-500'>
                        <p>{invoice.name}</p>
                        <p>{invoice.streetAddress}</p>
                        <p>
                            {invoice.postCode}
                        </p>
                        <p>
                            {invoice.city}, {invoice.country}
                        </p>
                        <p>
                            {invoice.email}
                        </p>
                    </div>
                </div>

                <div className='text-right text-sm md:text-base'>
                    <div className='text-xl md:text-2xl font-bold'>
                        Invoice To
                    </div>
                    <div className=' text-gray-500'>
                        <p>{invoice.clientName}</p>
                        <p>{invoice.clientStreetAddress}</p>
                        <p>
                            {invoice.clientPostCode}
                        </p>
                        <p>
                            {invoice.city}, {invoice.clientCountry}
                        </p>
                        <p>
                            {invoice.clientEmail}
                        </p>
                    </div>
                </div>
            </div>
            {
                invoice.status === "pending" || invoice.status === "unpaid" &&  (
                    <div>
                        Payment Due: 
                        <span>
                            {format(new Date(invoice.invoiceDate), 'MMM d, yyy')}

                        </span>
                    </div>
                )
            }

                <hr />

            <TableItem items={invoice.items} />

            <div>
                <div className='text-lg md:text-xl font-bold'>Payment Method</div>
                <div>Debit Card</div>
                <div>Access Bank - {invoice.bankAccount} </div>
            </div>

            
        </Container>
    </div>
  )
}

export default InvoiceClient