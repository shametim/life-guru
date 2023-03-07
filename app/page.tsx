import { auth, currentUser } from "@clerk/nextjs/app-beta";

export default async function Home() {
  const user = await currentUser();

  return <div className="flex justify-center">{user?.id}</div>;
}
