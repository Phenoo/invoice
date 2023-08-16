import getInvoiceById from '@/app/actions/getInvoiceById'
import React from 'react'
import InvoiceClient from '../InvoiceClient'
import Header from '@/components/Header'
import { saveAs } from 'file-saver'; // Import file-saver library


const Page = async ({params}) => {
    const invoice = await getInvoiceById(params);


  return (
    <>
        <Header />
        <InvoiceClient invoice={invoice} />
    </>
  )
}

export default Page