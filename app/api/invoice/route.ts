 import { NextResponse } from "next/server";
 import prisma from "@/lib/prismadb"

 import getCurrentUser from "@/app/actions/getCurrentUser";

 export async function POST(req: Request){
    const currentUser = await getCurrentUser()
    
    if(!currentUser){
        return NextResponse.error()
    }

    const body = await req.json()

    const {
        name,
        idNo,
        streetAddress,
        city,
        postCode,
        country,
        bankAccount,
        clientName,
        clientEmail,
        invoiceDate ,
        dueDate,
        status,
        currencyCountry,
        decription,
        items,
        clientStreetAddress ,
        clientCity,
        clientPostCode,
        clientCountry ,
        
      }  = body;

      const invoice = await prisma.invoice.create({
        data: {
            name,
            idNo: idNo.toString(),
            streetAddress,
            city,
            postCode,
            country,
            bankAccount,
            clientName,
            clientEmail,
            invoiceDate,
            dueDate,
            status,
            currencyCountry,
            decription,
            userId: currentUser.id,
            items: {
              create: [...items],
            },
            clientStreetAddress ,
            clientCity,
            clientPostCode,
            clientCountry ,
        }
      })

      return NextResponse.json(invoice)
 }