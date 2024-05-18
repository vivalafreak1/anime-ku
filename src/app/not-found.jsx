"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-color-secondary">
        <FileSearch size={64} className="mb-4 text-blue-500" />
        <h1 className="mb-2 text-5xl font-bold text-gray-800">
          Halaman tidak ditemukan
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Maaf, kami tidak dapat menemukan halaman yang kamu inginkan
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 transition-all rounded text-color-secondary bg-color-dark hover:bg-blue-600"
          >
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 transition-all rounded text-color-secondary bg-color-orange hover:bg-green-600"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
