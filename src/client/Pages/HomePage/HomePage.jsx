import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadmoreBtn from "../../component/LoadmoreBtn";
import Preloader from "../../component/Preloader";
import Movies from "../../component/movies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}`
      )
      .then(async (response) => {
        console.log(response);
        const data = await response.data;
        setMovies([...movies, ...data.results]);
      });
  }, [page]);

  const showMoreFilms = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      {movies.length ? <Movies films={movies} /> : <Preloader />}
      <LoadmoreBtn onClick={showMoreFilms} />
    </>
  );
}
