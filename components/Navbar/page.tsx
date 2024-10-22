import { auth } from "@/auth";
import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          src={session?.user?.image || "/avatr1.png"}
          alt="search"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        
        <div className="bg-white w-7 h-7 flex items-center justify-center relative rounded-full text-xs">
        <IoMdNotifications className="size-7"/>
          <div className="absolute -top-3 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            {session?.user?.role}
          </span>
          <span className="text-[10px] text-gray-500 text-right">
            {session?.user?.email}
          </span>
        </div>
        <Image
          src="/avatr1.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
