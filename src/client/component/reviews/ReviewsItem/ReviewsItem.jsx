import React from "react";

export default function ReviewsItem({ author, content, updated_at }) {
  return (
    <li className="reviewsItem">
      <h4>{author}</h4>
      <p>{content}</p>
      <p className="updated">{updated_at}</p>
    </li>
  );
}
