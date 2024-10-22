import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      {!session ? (
        <Link href="/signin">Sign In</Link>
      ) : (
        <div><Link href="/home">Kembail Ke Dashboard</Link></div>
      )}
    </div>
  );
}
