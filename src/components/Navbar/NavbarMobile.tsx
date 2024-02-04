import { Link, useNavigate } from "react-router-dom";
import ButtonsChangeLanguage from "../ButtonsChangeLanguage";
import { KeyboardEvent, useContext, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

import "../../scss/components/Navbar.scss";
import { PageContext } from "../../contexts/Page/PageContext";

const NavbarMobile = () => {
  const { changePage } = useContext(PageContext);

  const [movieName, setMovieName] = useState("");
  const [open, setOpen] = useState(false);

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
    <header className="header-mobile">
      <Link to="/" className="logo" onClick={() => changePage(1)}>
        <p>Good</p>
        <p>Movie</p>
        <p>97</p>
      </Link>
      <button
        className="menu-btn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <p>X</p> : <FaAlignJustify />}
      </button>
      <nav className={open ? "header-menu active" : "header-menu"}>
        <ButtonsChangeLanguage />
        <input
          type="text"
          placeholder="Procurando algo novo?"
          onChange={(e) => setMovieName(e.target.value)}
          onKeyDown={handleKeyboard}
          value={movieName}
        />
        <div className="btn-procurar">
          <button onClick={handleClick}>Procurar</button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMobile;
