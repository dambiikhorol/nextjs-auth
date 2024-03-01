import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className='text-4xl'>Auth App Home</h1>
      <Link className={buttonVariants()} href="/admin">Open admin</Link>

      <h2>client session</h2>
      <User />
      <h2>server session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
