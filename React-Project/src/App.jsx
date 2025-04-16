import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderLayOut from "./components/HeaderLayOut";
import MoviesList from "./pages/MoviesList";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";
import MovieIntroSections from "./components/MovieIntroSections/MovieIntroSections";

import TVList from "./pages/TVList";
import TVDetails from "./pages/TVDetails";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayOut />}>
          {/* <Route path="/" element={<MoviesList />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path="/movie/:id" element={<MovieDetails />} /> */}
              <Route path="/" element={<MoviesList />} />
             <Route path="/search/:query" element={<SearchResults />} />
             <Route path="/home" element={<MovieIntroSections />} />

        <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/TV" element={<TVList />} />
          <Route path="/TV/:id" element={<TVDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
