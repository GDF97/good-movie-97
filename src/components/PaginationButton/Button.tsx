import { useContext } from "react";
import { PageContext } from "../../contexts/Page/PageContext";
import "./Button.scss";

const Button = ({ pageNumber }: { pageNumber: number }) => {
  const { page, changePage } = useContext(PageContext);

  const handleClick = (page: number) => {
    changePage(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      className={pageNumber === page ? "pgBtn active" : "pgBtn"}
      value={pageNumber}
      onClick={() => handleClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};

export default Button;
