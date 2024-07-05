// components/Navbar/UserActionButton.jsx
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function UserActionButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserSession = async () => {
      const session = await getSession();
      setUser(session?.user ?? null);
    };

    fetchUserSession();
  }, []);

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/auth/signout" : "/auth/signin";

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
