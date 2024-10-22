import Image from "next/image";
import Link from "next/link";
import SignoutButton from "@/components/Menu/SignoutButton";
import { auth } from "@/auth";

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
              <Image src="/avatr1.png" alt="menu" width={20} height={20} />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              href="/invoices"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src="/avatr1.png" alt="menu" width={20} height={20} />
              <span className="hidden lg:block">Invoice</span>
            </Link>
            {session.user.role === "owner" ? (
              <div>
                <Link
                  href="/users"
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                >
                  <Image src="/avatr1.png" alt="menu" width={20} height={20} />
                  <span className="hidden lg:block">Users</span>
                </Link>
                <Link
                  href="/equities"
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                >
                  <Image src="/avatr1.png" alt="menu" width={20} height={20} />
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
              <Image src="/avatr1.png" alt="menu" width={20} height={20} />
              <span className="hidden lg:block">Setting</span>
            </Link>
            <Link
              href="/invoices"
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src="/avatr1.png" alt="menu" width={20} height={20} />
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
