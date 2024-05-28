// components/AnimeList/CommentInput.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && (
        <p className="text-color-primary">Comment posted successfully!</p>
      )}

      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 p-4 text-xl border rounded"
        placeholder="Write your comment here..."
      />
      <button
        onClick={handlePosting}
        className="px-3 py-2 mt-2 rounded text-color-secondary bg-color-orange"
      >
        Post Comment
      </button>
    </div>
  );
}
