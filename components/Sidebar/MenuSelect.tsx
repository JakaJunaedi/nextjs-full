import { auth } from "@/auth";
import Link from "next/link";
import { FiBook, FiHome, FiUser } from "react-icons/fi";

export const MenuSelect = async () => {
  const session = await auth();
  return (
    <div className="space-y-1">
      {session && (
        <>
          <Link
            href="/"
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]"
          >
            <FiHome />
            Dashboard
          </Link>
          {session.user.role === "owner" ? (
            <ul>
              <li>
                <Link
                  href="/users"
                  className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]"
                >
                  <FiUser />
                  User
                </Link>
              </li>
              <li>
                <Link
                  href="/invoices"
                  className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]"
                >
                  <FiBook />
                  Invoice
                </Link>
              </li>
            </ul>
          ) : null}
        </>
      )}
    </div>
  );
};
