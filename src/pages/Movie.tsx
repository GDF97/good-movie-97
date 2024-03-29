import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { Movie } from "../types/Movie";

import "../scss/pages/Movie.scss";
import { LanguageContext } from "../contexts/Language/LanguageContext";

const formatCurrency = (number: number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const MobileMovie = ({
  id,
  title,
  poster_path,
  overview,
  budget,
  revenue,
  runtime,
}: Movie) => {
  return (
    <div className="mobile-poster">
      <img src={`${import.meta.env.VITE_IMG}${poster_path}`} alt="" />
      <h2>{title}</h2>
      <div>
        <p>Orçamento:</p>
        <p>{budget ? formatCurrency(budget) : 0}</p>
      </div>
      <div>
        <p>Receita:</p>
        <p>{revenue ? formatCurrency(revenue) : 0}</p>
      </div>
      <div>
        <p>Duração</p>
        <p>{runtime} minutes</p>
      </div>
      <div>
        <p>Descrição</p>
        <p>{overview}</p>
      </div>
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
  const { language } = useContext(LanguageContext);

  const fetchOneMovie = async (movie_id: number) => {
    const { id, title, poster_path, overview, budget, revenue, runtime } =
      await api.fetchOneMovie(movie_id);

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
    fetchOneMovie(parserId);
  }, [language]);

  return (
    <div className="container-movie">
      {moviePoster && <DesktopMovie {...moviePoster} />}
      {moviePoster && <MobileMovie {...moviePoster} />}
    </div>
  );
};

export default MoviePoster;
