import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePoster from "./pages/Movie";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/Navbar";

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
