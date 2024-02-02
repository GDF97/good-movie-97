import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MoviePoster from "./pages/Movie";
import Search from "./pages/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePoster />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
