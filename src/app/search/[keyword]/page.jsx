"use client";

import { useState, useEffect } from "react";
import { getAnimeResponse } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ReactLoading from "react-loading";

export default function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  // State for storing search results
  const [searchAnime, setSearchAnime] = useState(null);
  // State for managing loading indicator
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAnime() {
      setIsLoading(true); // Start loading
      const result = await getAnimeResponse("anime", `q=${decodedKeyword}`);
      setSearchAnime(result); // Set search results
      setIsLoading(false); // End loading
    }

    fetchAnime();
  }, [decodedKeyword]);

  return (
    <>
      <Header title={`Hasil Pencarian: ${decodedKeyword}`} />
      {isLoading ? (
        <div className="flex items-center justify-center h-1/4">
          <ReactLoading type="spin" color="#FEDD89" height="5%" width="5%" />
        </div>
      ) : (
        <AnimeList api={searchAnime} />
      )}
    </>
  );
}
