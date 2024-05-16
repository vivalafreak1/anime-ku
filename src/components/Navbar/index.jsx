import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center">
        <Link href="/" className="text-2xl font-bold">
          Anime Next
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
