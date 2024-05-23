import Link from "next/link";
import { authUserSession } from "@/libs/auth";

export default async function UserActionButton() {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center gap-4">
      {user && (
        <Link
          href="/users/dashboard"
          className="inline-block px-4 py-2 transition rounded bg-color-blue text-color-secondary hover:bg-color-primary hover:text-color-dark"
          aria-label="Dashboard"
        >
          Dashboard
        </Link>
      )}
      <Link
        href={actionURL}
        className="inline-block px-4 py-2 transition rounded text-color-secondary bg-color-orange hover:bg-color-primary hover:text-color-dark"
        aria-label={actionLabel}
      >
        {actionLabel}
      </Link>
    </div>
  );
}
