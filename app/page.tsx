import { currentUser, UserButton } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();
  
  return (
    <div className="flex justify-center">
      {user?.id ? <UserButton></UserButton> : <Link href={"/sign-in"}>Sign in</Link>}
    </div>
  );
}
