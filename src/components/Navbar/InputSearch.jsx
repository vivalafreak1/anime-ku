"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value.trim();

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      if (keyword) {
        router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
      } else {
        router.push("/search");
      }
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        placeholder="Cari judul..."
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ref={searchRef}
        onKeyDown={handleSearch}
        aria-label="Search"
      />
      <button
        className="absolute top-2 right-2"
        onClick={handleSearch}
        aria-label="Search Button"
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
