import { useState, KeyboardEvent, useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "../../scss/components/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import ButtonsChangeLanguage from "../ButtonsChangeLanguage";
import { PageContext } from "../../contexts/Page/PageContext";

const NavbarDesktop = () => {
  const { changePage } = useContext(PageContext);

  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!movieName) return;

    navigate(`/search?query=${movieName}`);
    setMovieName("");
  };

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <header className="header-desktop">
      <div>
        <Link to="/" className="logo" onClick={() => changePage(1)}>
          <p>Good</p>
          <p>Movie</p>
          <p>97</p>
        </Link>
        <ButtonsChangeLanguage />
      </div>
      <div>
        <input
          type="text"
          placeholder="Procurando algo novo?"
          onChange={(e) => setMovieName(e.target.value)}
          onKeyDown={handleKeyboard}
          value={movieName}
        />
        <button className="btn" onClick={handleClick}>
          <BiSearchAlt2 />
        </button>
      </div>
    </header>
  );
};

export default NavbarDesktop;
