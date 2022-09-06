import React from "react";

export default function LoadmoreBtn({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
