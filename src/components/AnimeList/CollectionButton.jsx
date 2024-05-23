"use client";
import React, { useState } from "react";

export default function CollectionButton({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
  userCollection,
}) {
  const [isCreated, setIsCreated] = useState(!!userCollection);
  const [isLoading, setIsLoading] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: isCreated ? "DELETE" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setTimeout(() => {
      if (result.success || result.isCreated) {
        setIsCreated(!isCreated);
      } else {
        // Handle the error appropriately
        console.error("Failed to update collection");
      }
      setIsLoading(false);
    }, 1000); // 1 second delay
  };

  return (
    <>
      {isLoading ? (
        <button className="px-2 py-1 bg-gray-500" disabled>
          Processing...
        </button>
      ) : isCreated ? (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-dark outline outline-color-orange hover:bg-color-primary hover:text-color-dark hover:outline-none"
        >
          Hapus dari koleksi
        </button>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-dark outline outline-color-orange hover:bg-color-primary hover:text-color-dark hover:outline-none"
        >
          Tambahkan ke koleksi
        </button>
      )}
    </>
  );
}
