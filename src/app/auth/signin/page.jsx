// auth/signin/page.jsx
import LoginForm from "@/components/LoginForm";
import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await authUserSession();

  if (user) {
    // Redirect to /users/dashboard if the user is logged in
    redirect("/users/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-color-dark">
      <div className="mt-8 mb-4">
        <Image
          src="https://lh3.googleusercontent.com/pw/AP1GczNrGH54cnvDIjP7TxK9S59fey9ekGNmAiokfBKhtpv6iKtJafZSI_TwEj-cXich0g8h5GbIoawcHsjJeS9z2zWP86Gum6unifRDBipKuSuiKFviZXiyy8NtmImzyyGO-MWF-MtHdEQOwNrIaTui6ihO=w958-h403-s-no-gm?authuser=0"
          alt="Header Logo"
          width={250}
          height={100}
          className="mx-auto md:mx-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 mt-8 rounded-lg shadow-lg border-color-orange">
        <h1 className="mb-8 text-4xl font-bold text-color-primary">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
}
