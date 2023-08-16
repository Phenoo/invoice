import prisma from "@/lib/prismadb"
import getCurrentUser from "./getCurrentUser"


export default async function getInvoices(){
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser){
            return []
        }
    
        let query: any = {};
    
        query.userId = currentUser.id;
    
        const invoices = await prisma.invoice.findMany({
            where: query,
            include: {
                items: true
            }
        });
        const safeInvoices = invoices.map((invoice) => ({
            ...invoice,
            invoiceDate: invoice.invoiceDate.toString(),
            createdAt: invoice.createdAt.toString(),
            updatedAt: invoice.updatedAt.toString(),
          }));
      
          return safeInvoices;
        } catch(err){
            console.log(err);
        }
}