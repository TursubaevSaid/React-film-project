import React, { useState, useEffect } from "react";
import Searchbar from "../../component/Searchbar";
import axios from "axios";
import Movies from "../../component/movies";
import LoadmoreBtn from "../../component/LoadmoreBtn";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then(async (response) => {
        console.log(response);
        const data = await response.data;
        setMovies([...movies, ...data.results]);
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then(async (response) => {
        console.log(response);
        const data = await response.data;
        setMovies(data.results);
      });
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (query) => {
    setQuery(query);
  };
  const showMoreFilms = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <div>
        <Searchbar
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={query}
        />
      </div>
      <Movies films={movies} />
      {movies.length > 1 && <LoadmoreBtn onClick={showMoreFilms} />}
    </>
  );
}
