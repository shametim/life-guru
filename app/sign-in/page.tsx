import { SignIn, SignedOut } from '@clerk/nextjs/app-beta';

export default function Page() {
  return <div className='flex justify-center'><SignIn /></div>;
}