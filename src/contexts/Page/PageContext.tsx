import { createContext } from "react";

type PageNumber = {
  page: number;
  changePage: (number: number) => void;
  setNumberOfPages: (number: number) => void;
  getNumberOfPages: Array<number>;
};

export const PageContext = createContext<PageNumber>(null!);
