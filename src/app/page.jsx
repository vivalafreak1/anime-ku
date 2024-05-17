import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  const ongoingAnime = await getAnimeResponse("seasons/now", "limit=10");

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title="Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Ongoing */}
      <section>
        <Header
          title="Sedang Berjalan"
          linkTitle="Lihat semua"
          linkHref="/ongoing"
        />
        <AnimeList api={ongoingAnime} />
      </section>
    </>
  );
}
