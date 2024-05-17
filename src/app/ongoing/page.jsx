"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api";
import ReactLoading from "react-loading";

export default function Page() {
  const [page, setPage] = useState(1);
  const [ongoingAnimes, setOngoingAnimes] = useState([]);
  //const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const ongoingAnime = await getAnimeResponse("seasons/now", `page=${page}`);
    setOngoingAnimes(ongoingAnime);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime yang Sedang Berlangsung #${page}`} />
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ReactLoading type="spin" color="#FEDD89" height={50} width={50} />
        </div>
      ) : (
        <AnimeList api={ongoingAnimes} />
      )}
      <Pagination
        page={page}
        lastPage={ongoingAnimes.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
