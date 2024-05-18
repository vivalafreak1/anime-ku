import Link from "next/link";
import InputSearch from "./InputSearch";
import { Outfit } from "next/font/google";
import UserActionButton from "./UserActionButton";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar() {
  return (
    <header className="shadow-md bg-color-secondary">
      <div className="container flex flex-col justify-between gap-4 p-4 mx-auto md:flex-row md:items-center">
        <Link
          href="/"
          className={`${outfit.className} text-2xl font-bold text-gray-800`}
          aria-label="Home"
        >
          ANIMENEXT
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}