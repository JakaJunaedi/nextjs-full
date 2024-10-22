import Image from "next/image";
import Link from "next/link";
import SignoutButton from "@/components/Menu/SignoutButton";
import { auth } from "@/auth";
import { FaHome } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdHelpCenter } from "react-icons/md";

const Menu = async () => {
  const session = await auth();

  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-col gap-2">
        <span className="hidden lg:block text-gray-400 font-light my-4">
          Menu
        </span>
        {session && (
          <>
            <Link
              href="/home"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <FaHome className="size-5" />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              href="/invoices"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <FaFileInvoiceDollar className="size-5" />
              <span className="hidden lg:block">Invoice</span>
            </Link>
            {session.user.role === "owner" ? (
              <div>
                <Link
                  href="/users"
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                >
                  <BiSolidUserAccount className="size-5" />
                  <span className="hidden lg:block">Users</span>
                </Link>
                <Link
                  href="/equities"
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                >
                  <FaSackDollar className="size-5" />
                  <span className="hidden lg:block">Equities</span>
                </Link>
              </div>
            ) : null}

            <span className="hidden lg:block text-gray-400 font-light my-4">
              Other
            </span>
            <Link
              href="/invoices"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <IoSettingsSharp className="size-5" />
              <span className="hidden lg:block">Setting</span>
            </Link>
            <Link
              href="/invoices"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <MdHelpCenter className="size-5" />
              <span className="hidden lg:block">Help Me</span>
            </Link>
            <SignoutButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
