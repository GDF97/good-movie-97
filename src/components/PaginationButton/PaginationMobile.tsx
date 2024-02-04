import { useContext } from "react";
import { PageContext } from "../../contexts/Page/PageContext";
import "./Button.scss";
import "../../scss/components/PaginationButtons.scss";

const PaginationMobile = () => {
  const { page, changePage, getNumberOfPages } = useContext(PageContext);

  const paginaAnterior = (number: number) => {
    window.scrollTo({
      top: 0,
    });
    changePage(number - 1);
  };
  const paginaSeguinte = (number: number) => {
    window.scrollTo({
      top: 0,
    });
    changePage(number + 1);
  };

  return (
    <div className="pgButtonMobileWrapper">
      {getNumberOfPages.length >= 0 && (
        <>
          <button
            className={page === 1 ? "pgBtn disabled" : "pgBtn"}
            onClick={() => paginaAnterior(page)}
          >
            {"<"}
          </button>
          <p>{page}</p>
          <button
            className={
              page === getNumberOfPages.length ? "pgBtn disabled" : "pgBtn"
            }
            onClick={() => paginaSeguinte(page)}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default PaginationMobile;
