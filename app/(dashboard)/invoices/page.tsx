import InvoiceTable from "@/components/DataTable/invoice-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Invoice"
}

const OwnerPage = () => {
  return <div>
  <h1 className='text-2xl font-bold'>Invoice List</h1>
  <div><InvoiceTable /></div>
</div>
};

export default OwnerPage;
