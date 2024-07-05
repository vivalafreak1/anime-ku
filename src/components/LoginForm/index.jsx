// components/LoginForm/index.jsx
"use client";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-color-accent text-color-dark hover:bg-gray-900"
      >
        <FaGithub className="mr-2" size={20} /> Sign in with GitHub
      </button>
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center px-6 py-3 font-semibold border rounded-lg text-color-secondary"
      >
        <FaGoogle className="mr-2" size={20} /> Sign in with Google
      </button>
    </div>
  );
}
