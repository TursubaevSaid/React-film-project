import imageDef from "../../../../image/No-image-found.jpg";

export default function CastItem({ profile_path, name }) {
  return (
    <li className="CastItem">
      <img
        className="castImg"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : imageDef
        }
        alt="img"
      />
      <h1 className="CastItem__title">{name}</h1>
    </li>
  );
}

CastItem.defaultProps = {
  profile_path: imageDef,
};
