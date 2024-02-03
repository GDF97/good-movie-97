import { useSearchParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import "../scss/pages/Home.scss";
import { Movie } from "../types/Movie";
import { useContext, useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import { LanguageContext } from "../contexts/Language/LanguageContext";
import PaginationButtons from "../components/PaginationButton/PaginationButtons";
import { PageContext } from "../contexts/Page/PageContext";

const Search = () => {
  const api = useApi();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const queryAsString = query ? String(query) : "";
  const { language } = useContext(LanguageContext);
  const { page, setNumberOfPages } = useContext(PageContext);

  const [movies, setMovies] = useState<Array<Movie>>([]);

  const fetchSearchedMovie = async (movieName: string) => {
    try {
      const { results, total_pages } = await api.fetchSearchedMovie(movieName);
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
    fetchSearchedMovie(queryAsString);
  }, [queryAsString, language, page]);

  return (
    <div className="container">
      <h1 className="container-title">
        Mostrando resultados para: <strong> {queryAsString} </strong>
      </h1>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p className="erro">Não há resultados para {queryAsString}</p>
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

export default Search;
