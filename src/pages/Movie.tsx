import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";

import "../scss/pages/Movie.scss";

const formatCurrency = (number: number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const MobileMovie = () => {
  return (
    <div className="mobile-poster">
      <h1>teste</h1>
    </div>
  );
};

const DesktopMovie = ({
  id,
  title,
  poster_path,
  overview,
  budget,
  revenue,
  runtime,
}: Movie) => {
  return (
    <div className="desktop-poster">
      <img
        src={`${import.meta.env.VITE_IMG}${poster_path}`}
        alt=""
        className="desktop-poster-image"
      />
      <div className="desktop-poster-details">
        <div className="row">
          <div className="details">
            <p>Titulo:</p>
            <p>{title}</p>
          </div>
          <div className="details">
            <p>Duração:</p>
            <p>{runtime} minutos</p>
          </div>
        </div>
        <div className="row">
          <div className="details">
            <p>Orçamento:</p>
            <p>{budget ? formatCurrency(budget) : 0}</p>
          </div>
          <div className="details">
            <p>Receita:</p>
            <p>{revenue ? formatCurrency(revenue) : 0}</p>
          </div>
        </div>

        <div className="overview">
          <p>Descrição</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

const MoviePoster = () => {
  const api = useApi();
  const { id } = useParams<string>();
  const parserId: number = id ? parseInt(id, 10) : 0;
  const [moviePoster, setMoviePoster] = useState<Movie | null>(null);

  const fetchOneMovie = async () => {
    const { id, title, poster_path, overview, budget, revenue, runtime } =
      await api.fetchOneMovie(parserId);

    const moviePosterObj: Movie = {
      id,
      title,
      poster_path,
      overview,
      budget,
      revenue,
      runtime,
    };

    setMoviePoster(moviePosterObj);
  };

  useEffect(() => {
    fetchOneMovie();
  }, []);
  return (
    <div className="container-movie">
      <MobileMovie />
      <DesktopMovie {...moviePoster!} />
    </div>
  );
};

export default MoviePoster;
