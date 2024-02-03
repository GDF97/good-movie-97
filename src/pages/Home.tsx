import { useContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Movie } from "../types/Movie";
import "../scss/pages/Home.scss";
import CardMovie from "../components/CardMovie";
import { LanguageContext } from "../contexts/Language/LanguageContext";
import { PageContext } from "../contexts/Page/PageContext";
import PaginationButtons from "../components/PaginationButton/PaginationButtons";

const Home = () => {
  const api = useApi();

  const { language } = useContext(LanguageContext);
  const { page, setNumberOfPages } = useContext(PageContext);

  const [movies, setMovies] = useState<Array<Movie>>([]);

  const fetchMovies = async () => {
    try {
      const { results, total_pages } = await api.fetchTopRatedMovies();
      const newMovies = results.map((element: Movie) => ({
        id: element.id,
        title: element.title,
        poster_path: element.poster_path,
      }));
      setMovies(newMovies);
      setNumberOfPages(total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [language, page]);

  return (
    <div className="container">
      <h1 className="container-title">Melhores Filmes</h1>
      <PaginationButtons />
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
      <PaginationButtons />
    </div>
  );
};

export default Home;
