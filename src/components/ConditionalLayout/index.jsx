"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/auth/signin" || pathname === "/auth/signout";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
