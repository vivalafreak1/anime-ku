// src/app/anime/[id]/page.jsx
import { getAnimeResponse } from "@/libs/api";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ClientPage from "./ClientPage";

// Server component for data fetching
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

  // Fetch comments for the anime
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id: id },
    orderBy: { createdAt: "desc" }, // Order comments by the creation date
  });

  return (
    <ClientPage
      anime={animeResponse}
      characters={limitedCharacters}
      user={user}
      userCollection={userCollection}
      animeId={id} // Pass the anime ID to the ClientPage component
      comments={comments} // Pass the comments to the ClientPage component
    />
  );
}
