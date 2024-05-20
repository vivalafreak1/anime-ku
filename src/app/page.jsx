import AnimeList from "@/components/AnimeList";
import MangaList from "@/components/MangaList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  const ongoingAnime = await getAnimeResponse("seasons/now", "limit=10");
  const topManga = await getAnimeResponse("top/manga", "limit=10");
  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Anime Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Divider */}
      <hr className="w-full mx-auto mb-8 border-t border-color-secondary max-w-screen-2xl" />
      {/* Anime Ongoing */}
      <section>
        <Header
          title="Anime yang Sedang Berjalan"
          linkTitle="Lihat semua"
          linkHref="/ongoing"
        />
        <AnimeList api={ongoingAnime} />
      </section>
      {/* Divider */}
      <hr className="w-full mx-auto mb-8 border-t border-color-secondary max-w-screen-2xl" />
      {/* Manga Populer */}
      <section>
        <Header
          title="Manga populer"
          linkTitle="Lihat semua"
          linkHref="/ongoing"
        />
        <MangaList api={topManga} />
      </section>
    </>
  );
}
