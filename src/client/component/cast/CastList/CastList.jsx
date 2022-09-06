import { useEffect, useState } from "react";
import CastItem from "../CastItem";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CastList() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const apiCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
    axios.get(apiCast).then(async (response) => {
      const data = await response.data;
      const { cast } = data;
      setCast(cast);
    });
  }, []);

  return (
    <div className="container castWrapper">
      {cast && (
        <>
          <ul className="castList">
            {cast.map((item) => (
              <CastItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
