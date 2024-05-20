import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section>
      <Header title={"Koleksi Saya"} />
      <div className="grid grid-cols-2 gap-4 px-4 mx-auto mb-8 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-5">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative block overflow-hidden transition-all rounded shadow-lg cursor-pointer text-color-primary hover:text-color-orange"
            >
              <div className="relative h-full">
                <Image
                  src={collect.anime_image}
                  alt={collect.anime_title}
                  width={200}
                  height={300}
                  className="object-cover w-full rounded max-h-96"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 p-4 font-bold bg-color-dark bg-opacity-80 md:text-xl">
                  {collect.anime_title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
