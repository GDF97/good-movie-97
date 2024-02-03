import { useContext } from "react";
import Button from "./Button";
import { PageContext } from "../../contexts/Page/PageContext";

const PaginationButtons = () => {
  const { getNumberOfPages } = useContext(PageContext);

  return (
    <div>
      {getNumberOfPages.length > 0 && (
        <>
          {getNumberOfPages.map((number) => (
            <Button key={number} page={number} />
          ))}
        </>
      )}
    </div>
  );
};

export default PaginationButtons;
