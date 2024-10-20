import { auth } from "@/auth";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = async () => {
  const session = await auth();
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <Image src={ session?.user?.image || "/avatr1.png"} alt="avatar" width={30} height={30} />
        <div className="text-start">
          <span className="text-sm font-bold block text-stone-500">
            {session?.user?.name}
          </span>
          <span className="text-xs block text-stone-500">
            {session?.user?.email}
          </span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs"/>
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs"/>
      </button>
    </div>
  );
};

export default AccountToggle;
