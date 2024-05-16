import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 mx-auto mb-8 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-5">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="transition-all cursor-pointer text-color-primary hover:text-color-accent"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={200}
              height={300}
              className="object-cover w-full rounded max-h-96"
            />
            <h3 className="p-4 font-bold md:text-xl text-md line-clamp-3">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
