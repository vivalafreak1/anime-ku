import Link from "next/link";
import InputSearch from "./InputSearch";
import { Outfit } from "next/font/google";

const roboto = Outfit({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center">
        <Link href="/" className={`${roboto.className} text-2xl font-bold`}>
          ANIMENEXT
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
