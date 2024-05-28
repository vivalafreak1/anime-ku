// components/AnimeList/CommentBox.jsx
import React from "react";
import { format } from "date-fns"; // Import date-fns for formatting dates

export default function CommentBox({ comments }) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 rounded-lg shadow-md outline-1">
          <p className="font-bold text-color-orange">{comment.username}</p>
          <p className="text-color-secondary">{comment.comment}</p>
          <p className="text-sm text-color-primary">
            {format(new Date(comment.createdAt), "PPP p")}{" "}
            {/* Format the date */}
          </p>
        </div>
      ))}
    </div>
  );
}
