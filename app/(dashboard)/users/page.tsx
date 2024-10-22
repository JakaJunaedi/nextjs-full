import UserTable from "@/components/DataTable/user-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table User"
}

const StaffPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>User List</h1>
      <div><UserTable /></div>
    </div>
  )
}

export default StaffPage
