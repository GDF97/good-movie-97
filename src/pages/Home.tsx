import { useContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Movie } from "../types/Movie";
import "../scss/pages/Home.scss";
import CardMovie from "../components/CardMovie";
import { LanguageContext } from "../contexts/LanguageContext";

const Home = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const api = useApi();

  const { language } = useContext(LanguageContext);

  const fetchMovies = async () => {
    try {
      const { results } = await api.fetchTopRatedMovies();
      const newMovies = results.map((element: Movie) => ({
        id: element.id,
        title: element.title,
        poster_path: element.poster_path,
      }));
      setMovies(newMovies);
    } catch (error) {
      console.error(error);
    }
    console.log(movies);
  };

  useEffect(() => {
    fetchMovies();
  }, [language]);

  return (
    <div className="container">
      <h1 className="container-title">Melhores Filmes</h1>
      <p>{language}</p>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>erro</p>
        ) : (
          <>
            {movies.map((movie, index) => (
              <CardMovie key={index} {...movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
