import { useNavigate } from "react-router-dom";
import { Movie } from "../types/Movie";
import "../scss/components/CardMovie.scss";

const CardMovie = ({ id, title, poster_path }: Movie) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="movie">
      <img
        src={`${import.meta.env.VITE_IMG}${poster_path}`}
        className="movie-image"
        alt="Image not found"
      />
      <h2 className="movie-title">{title}</h2>
      <button onClick={handleClick}>Detalhes</button>
    </div>
  );
};

export default CardMovie;
