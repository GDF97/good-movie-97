import { FormEvent, useState, KeyboardEvent } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "../scss/components/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import ButtonsChangeLanguage from "./ButtonsChangeLanguage";

const Navbar = () => {
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    if (!movieName) return;

    navigate(`/search?query=${movieName}`);
    setMovieName("");
  };

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };
  return (
    <header>
      <div>
        <Link to="/" className="logo">
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

export default Navbar;
