import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  return (
    <div className="flex flex-col items-center justify-center mt-8 text-color-primary">
      <h5 className="text-2xl font-bold">Selamat datang, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="px-4 py-3 text-xl font-bold rounded-2xl bg-color-orange text-color-secondary hover:bg-color-primary hover:text-color-dark"
        >
          Koleksi
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="px-4 py-3 text-xl font-bold rounded-2xl bg-color-orange text-color-secondary hover:bg-color-primary hover:text-color-dark"
        >
          Komentar
        </Link>
      </div>
    </div>
  );
}
