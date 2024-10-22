import { signOut } from "@/auth";
import { FiLogOut } from "react-icons/fi";

const SignoutButton = () => {
  return (
    <div className='flext sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs'>
        <form action={async () => {
            "use server";
            await signOut({redirectTo: '/signin'})
        }}><button type='submit' className='bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-800 flex items-center gap-2 justify-center size-12 text-sm-50'  ><FiLogOut />Sign Out </button></form>
    </div>
  )
}

export default SignoutButton
