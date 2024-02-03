import { useContext } from "react";
import { LanguageContext } from "../contexts/Language/LanguageContext";
import "../scss/components/btnLanguage.scss";

const ButtonsChangeLanguage = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <div className="btnLanguageWrapper">
      <button
        className={`${language == "pt-BR" ? "active" : ""}`}
        onClick={() => changeLanguage("pt-BR")}
      >
        pt-BR
      </button>
      <button
        className={`${language == "en-US" ? "active" : ""}`}
        onClick={() => changeLanguage("en-US")}
      >
        en-US
      </button>
    </div>
  );
};

export default ButtonsChangeLanguage;
