import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
