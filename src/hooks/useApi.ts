import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const useApi = () => {
  const baseUrl = import.meta.env.VITE_API;
  const searchUrl = import.meta.env.VITE_SEARCH;
  const tokken = import.meta.env.VITE_TOKKEN;
  const { language } = useContext(LanguageContext);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tokken}`,
    },
  };

  return {
    fetchTopRatedMovies: async () => {
      const response = await fetch(
        `${baseUrl}top_rated?language=${language}`,
        options
      );
      const data = await response.json();
      return data;
    },
    fetchOneMovie: async (id: number) => {
      const response = await fetch(
        `${baseUrl}${id}?language=${language}`,
        options
      );
      const data = response.json();
      return data;
    },
    fetchSearchedMovie: async (movie: string) => {
      const response = await fetch(
        `${searchUrl}?query=${movie}&language=${language}`,
        options
      );
      const data = await response.json();
      return data;
    },
  };
};
