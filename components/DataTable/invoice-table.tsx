import { getInvoicesByUser } from "@/lib/fetchData";
import { formatDate } from "@/lib/dateTime";

const InvoiceTable = async () => {
  const invoices = await getInvoicesByUser();

  if (!invoices?.length) return <h1>Tidak Ada Data</h1>;

  return (
    <table className="w-full bg-gray-300 mt-2">
      <thead className="border-b border-gray-950">
        <tr>
          <th className="py-3 px-6 text-left text-sm">Name</th>
          <th className="py-3 px-6 text-left text-sm">Price</th>
          <th className="py-3 px-6 text-left text-sm">Dibuat</th>
          <th className="py-3 px-6 text-left text-sm">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td className="py-3 px-6">{invoice.name}</td>
            <td className="py-3 px-6">{invoice.price}</td>
            <td className="py-3 px-6">{invoice.user.name}</td>
            <td className="py-3 px-6">{formatDate(invoice.createdAt.toString())}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
