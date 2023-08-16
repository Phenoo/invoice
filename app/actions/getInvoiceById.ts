import prisma from "@/lib/prismadb"


interface IParams {
    id?: string;
}

export default async function getInvoiceById(params: IParams){
    try {
        const {id} = params;

        const invoice = await prisma.invoice.findUnique({
            where: {
                id: id
            },
            include: {
                user: true,
                items: true
            }
        });

        if(!id){
            return null;
        }

        return {
            ...invoice,
            createdAt: invoice?.createdAt.toString(),
            items: invoice?.items,
            user: {
                updatedAt: invoice?.user.updateAt.toString(),
                createdAt: invoice?.user.createdAt.toString(),
                emailVerified: invoice?.user.emailVerified?.toString() || null,
            }
        }
    } catch (error: any){
        throw new Error(error)
    }
}