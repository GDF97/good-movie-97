import { useState } from "react";
import { PageContext } from "./PageContext";

export const PageProvider = ({ children }: { children: JSX.Element }) => {
  const [page, setPage] = useState(1);
  const [numeroDePaginas, setNumeroDePaginas] = useState<number[]>([]);

  const changePage = (number: number) => {
    setPage(number);
  };

  const setNumberOfPages = (number: number) => {
    let i: number = 1;
    let totalDePaginas: number = number <= 10 ? number : 10;
    let arr: number[] = [];
    while (i <= totalDePaginas) {
      arr.push(i);
      i++;
    }
    setNumeroDePaginas(arr);
  };

  const getNumberOfPages: number[] = numeroDePaginas;

  return (
    <PageContext.Provider
      value={{ page, changePage, setNumberOfPages, getNumberOfPages }}
    >
      {children}
    </PageContext.Provider>
  );
};
