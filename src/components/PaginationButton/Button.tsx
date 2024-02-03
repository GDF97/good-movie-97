import { useContext } from "react";
import { PageContext } from "../../contexts/Page/PageContext";

const Button = ({ page }: { page: number }) => {
  const { changePage } = useContext(PageContext);
  const handleClick = (page: number) => {
    changePage(page);
  };
  return (
    <button value={page} onClick={() => handleClick(page)}>
      {page}
    </button>
  );
};

export default Button;
