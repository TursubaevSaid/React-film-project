import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../../component/cast";
import axios from "axios";
import shortid from "shortid";
import Reviews from "../../component/reviews";
export default function SingleMoviePage() {
  const [movies, setMovies] = useState({});
  const { id } = useParams();
  // const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`
      )
      .then(async (response) => {
        console.log(response);
        const data = await response.data;
        setMovies(data);
        console.log(data);
      });
  }, [id]);

  const navElem = movies.genres?.map((item) => {
    return (
      <div key={shortid.generate()}>
        <p>{item.name}</p>
      </div>
    );
  });

  return (
    <>
      <div className="singleCard container">
        {movies && (
          <>
            <div className="SingleCard-image">
              <img
                className="card_img"
                src={` https://image.tmdb.org/t/p/w500${
                  movies.poster_path || movies.backdrop_path
                }`}
                alt="img"
              />
            </div>
            <div className="card-action action">
              <span className="card-title">
                Name :{movies.original_title || movies.title}
              </span>
              <div>
                {" "}
                <p>User score : {movies.vote_average}</p>
                <p>{movies.overview}</p>
                <p>Release date: {movies.release_date}</p>
                <div>{navElem}</div>
              </div>
              <div className="cast-reviews">
                <button className="btn">
                  <Link to="cast" className="cast">
                    Cast
                  </Link>
                </button>
                <button className="btn">
                  <Link to="reviews" className="reviews">
                    Reviews
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      ;
    </>
  );
}
