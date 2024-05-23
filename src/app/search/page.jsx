"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAnimeResponse } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ReactLoading from "react-loading";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const startYear = searchParams.get("startYear") || "";
  const endYear = searchParams.get("endYear") || "";
  const genre = searchParams.get("genre") || "";
  const minScore = searchParams.get("minScore") || "";
  const status = searchParams.get("status") || "";
  const rating = searchParams.get("rating") || "";

  // State for storing search results
  const [searchAnime, setSearchAnime] = useState(null);
  // State for managing loading indicator
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAnime() {
      setIsLoading(true); // Start loading

      // Construct the query string
      let query = "";
      if (keyword) query += `q=${keyword}`;
      if (startYear) query += `&start_date=${startYear}-01-01`;
      if (endYear) query += `&end_date=${endYear}-12-31`;
      if (genre) query += `&genres=${genre}`;
      if (minScore) query += `&min_score=${minScore}`;
      if (status) query += `&status=${status}`;
      if (rating) query += `&rating=${rating}`;

      const result = await getAnimeResponse("anime", query);
      setSearchAnime(result); // Set search results
      setIsLoading(false); // End loading
    }

    fetchAnime();
  }, [keyword, startYear, endYear, genre, minScore, status, rating]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const keyword = form.keyword.value.trim();
    const startYear = form.startYear.value.trim();
    const endYear = form.endYear.value.trim();
    const genre = form.genre.value.trim();
    const minScore = form.minScore.value.trim();
    const status = form.status.value.trim();
    const rating = form.rating.value.trim();

    // Update the URL with query parameters
    const query = new URLSearchParams();
    if (keyword) query.set("keyword", keyword);
    if (startYear) query.set("startYear", startYear);
    if (endYear) query.set("endYear", endYear);
    if (genre) query.set("genre", genre);
    if (minScore) query.set("minScore", minScore);
    if (status) query.set("status", status);
    if (rating) query.set("rating", rating);
    router.push(`/search?${query.toString()}`);
  };

  return (
    <>
      <Header title={`Hasil Pencarian: ${keyword || "All Anime"}`} />
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center p-4 mx-auto my-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 max-w-screen-2xl"
      >
        <input
          name="keyword"
          type="text"
          placeholder="Cari judul..."
          defaultValue={keyword}
          className="w-full p-2 border rounded border-color-orange sm:w-1/2"
        />
        <input
          name="startYear"
          type="number"
          placeholder="Start Year"
          defaultValue={startYear}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <input
          name="endYear"
          type="number"
          placeholder="End Year"
          defaultValue={endYear}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <input
          name="genre"
          type="text"
          placeholder="Genre (comma-separated)"
          defaultValue={genre}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/4"
        />
        <input
          name="minScore"
          type="number"
          placeholder="Min Score"
          step="1"
          min="0"
          max="10"
          defaultValue={minScore}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        />
        <select
          name="status"
          defaultValue={status}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        >
          <option value="">Any Status</option>
          <option value="airing">Airing</option>
          <option value="complete">Complete</option>
          <option value="upcoming">Upcoming</option>
        </select>
        <select
          name="rating"
          defaultValue={rating}
          className="w-full p-2 border border-gray-300 rounded sm:w-1/6"
        >
          <option value="">Any Rating</option>
          <option value="g">G - All Ages</option>
          <option value="pg">PG - Children</option>
          <option value="pg13">PG-13 - Teens 13 or older</option>
          <option value="r17">R - 17+ (violence & profanity)</option>
          <option value="r">R+ - Mild Nudity</option>
          <option value="rx">Rx - Hentai</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 rounded text-color-secondary bg-color-orange sm:w-1/6"
        >
          Search
        </button>
      </form>
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
