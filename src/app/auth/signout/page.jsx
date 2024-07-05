// auth/signout/page.jsx
import LogoutForm from "@/components/LogoutForm";
import { authUserSession } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await authUserSession();

  if (!user) {
    // Redirect to /auth/signin if the user is not logged in
    redirect("/auth/signin");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-color-dark">
      <div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-lg">
        <h1 className="mb-8 text-4xl font-bold text-color-secondary">
          Sign Out
        </h1>
        <LogoutForm />
      </div>
    </div>
  );
}
