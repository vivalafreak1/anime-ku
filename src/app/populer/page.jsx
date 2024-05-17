"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api";
import ReactLoading from "react-loading";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnimes, setTopAnimes] = useState([]);
  //const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnimes(popularAnime);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ReactLoading type="spin" color="#FEDD89" height={50} width={50} />
        </div>
      ) : (
        <AnimeList api={topAnimes} />
      )}
      <Pagination
        page={page}
        lastPage={topAnimes.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
