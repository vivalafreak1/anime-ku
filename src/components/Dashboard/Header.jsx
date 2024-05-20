"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex items-center justify-between px-4 mx-auto mt-10 mb-8 max-w-screen-2xl">
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl font-bold text-color-primary">{title}</h3>
    </div>
  );
}
