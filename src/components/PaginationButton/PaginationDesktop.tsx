import { useContext } from "react";
import Button from "./Button";
import { PageContext } from "../../contexts/Page/PageContext";
import "../../scss/components/PaginationButtons.scss";

const PaginationDesktop = () => {
  const { getNumberOfPages } = useContext(PageContext);

  return (
    <div className="pgButtonsWrapper">
      {getNumberOfPages.length > 0 && (
        <>
          {getNumberOfPages.map((number) => (
            <Button key={number} pageNumber={number} />
          ))}
        </>
      )}
    </div>
  );
};

export default PaginationDesktop;
