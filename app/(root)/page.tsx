import Container from "@/components/Container";
import { DataTableDemo } from "@/components/InvoiceTable";

import getCurrentUser from "../actions/getCurrentUser";
import getInvoices from "../actions/getInvoices";

export default async  function Home() {
  const currentUser = await getCurrentUser()
  const invoices = await getInvoices()
  return (
    <div>
      <Container>
        <DataTableDemo data={invoices} currentUser={currentUser}  />
      </Container>
    </div>
  )
}
