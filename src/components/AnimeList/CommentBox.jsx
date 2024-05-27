// components/AnimeList/CommentBox.jsx
import React from "react";

export default function CommentBox({ comments }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 text-color-dark bg-color-primary">
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
