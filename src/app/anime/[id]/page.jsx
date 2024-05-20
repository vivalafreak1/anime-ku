// app/anime/[id]/page.js
import { getAnimeResponse } from "@/libs/api";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ClientPage from "./ClientPage";

export default async function Page({ params: { id } }) {
  const user = await authUserSession();
  const userCollection = user
    ? await prisma.collection.findFirst({
        where: { user_email: user.email, anime_mal_id: id },
      })
    : null;
  const animeResponse = await getAnimeResponse(`anime/${id}`);
  const characterResponse = await getAnimeResponse(`anime/${id}/characters`);

  // Limit the characters to the first six
  const limitedCharacters = characterResponse.data.slice(0, 6);

  return (
    <ClientPage
      anime={animeResponse}
      characters={limitedCharacters}
      user={user}
      userCollection={userCollection}
    />
  );
}
