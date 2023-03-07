import { SignUp } from "@clerk/nextjs/app-beta";

const SignUpPage = () => (
  <SignUp path="/sign-up" routing="hash" signInUrl="/sign-in" />
);

export default SignUpPage;
