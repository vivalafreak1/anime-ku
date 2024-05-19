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
    <section className="w-full px-4 mt-4">
      <Header title={"Koleksi Saya"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={collect.anime_image}
                alt={collect.anime_image}
                width={350}
                height={250}
                className="w-full"
              />
              <div className="absolute bottom-0 flex items-center justify-center w-full h-16 bg-color-accent">
                <h5 className="text-xl text-center">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
