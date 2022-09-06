import React, { useState } from "react";

export default function Searchbar({ onSubmit }) {
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <>
      <div className="Search">
        {" "}
        <div className="container searchbar">
          <form action="#" onSubmit={handleSubmit}>
            <div className="file-field input-field">
              <button className="btn">Search</button>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  value={query}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
