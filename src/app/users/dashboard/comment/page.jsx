import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import React from "react";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

export default async function Page() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="w-full px-4 mt-4">
      <Header title={"My Comment"} />
      <div className="grid grid-cols-1 gap-4 py-4 mx-auto max-w-screen-2xl">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="p-4 bg-color-primary text-color-dark"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
