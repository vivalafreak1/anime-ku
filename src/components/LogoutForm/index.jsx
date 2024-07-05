// components/LogoutForm/index.jsx
"use client";
import { signOut } from "next-auth/react";

export default function LogoutForm() {
  return (
    <div className="flex flex-col items-center w-full space-y-4">
      <p className="mb-4 text-lg text-color-secondary">
        Are you sure you want to sign out?
      </p>
      <button
        onClick={() => signOut()}
        className="flex items-center justify-center px-6 py-3 font-semibold rounded-lg text-color-secondary bg-color-orange"
      >
        Sign Out
      </button>
    </div>
  );
}
