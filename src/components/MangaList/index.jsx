import Image from "next/image";
import Link from "next/link";

export default function MangaList({ api }) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 mx-auto mb-8 max-w-screen-2xl sm:grid-cols-3 md:grid-cols-5">
      {api.data?.map((manga, index) => (
        <Link
          href={`/manga/${manga.mal_id}`}
          className="relative block overflow-hidden transition-all rounded shadow-lg cursor-pointer text-color-primary hover:text-color-orange"
          key={index}
        >
          <div className="relative h-full">
            <Image
              src={manga.images.webp.image_url}
              alt={manga.title}
              width={200}
              height={300}
              className="object-cover w-full rounded max-h-96"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 p-4 font-bold bg-color-dark bg-opacity-80 md:text-xl">
              {manga.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
