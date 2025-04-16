
import React, { useState, useEffect } from "react";
import { getMovies } from "../apis/config";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MovieIntroSection from "../components/MovieIntroSections/MovieIntroSections";
import "../App.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then((res) => {
        setMovies(res.data.results);
        setFilteredMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = () => {
    if (searchQuery.trim() === "") return;
    navigate(`/search/${encodeURIComponent(searchQuery)}`);
  };

  const handleWishlist = (movie) => {
    if (wishlist.includes(movie.id)) {
      setWishlist(wishlist.filter((id) => id !== movie.id));
    } else {
      setWishlist([...wishlist, movie.id]);
    }
  };

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = Math.floor((rating / 10) * maxStars);
    const hasHalfStar = ((rating / 10) * maxStars) - filledStars >= 0.5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} color="#f5c518" />);
      } else if (i === filledStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} color="#f5c518" />);
      } else {
        stars.push(<FaRegStar key={i} color="#ccc" />);
      }
    }

    return <div className="d-flex gap-1">{stars}</div>;
  };

  return (
    <div className="container-fluid px-4">
      <div className="row py-4">
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          <h1 className="heading-color heading">Welcome TO Our Movie App</h1>
          <p className="heading-color">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, laboriosam.
          </p>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="input-field w-75 outline-none border-0 rounded px-2"
              placeholder="Search Your Favourite...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="w-25 border-0 search-button" onClick={searchMovies}>
              Search
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row gy-4">
          {filteredMovies.length === 0 ? (
            <div className="text-center col-12">
              <p>No movies found.</p>
            </div>
          ) : (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="col-6 col-md-3">
                <div className="card h-100 shadow-sm border-0 rounded custom-card">
                  <Link to={`/movie-details/${movie.id}`} className="card-link">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-truncate">{movie.title}</h5>
                    <p className="text-muted small mb-1">{movie.release_date}</p>
                    <div title={`Rating: ${movie.vote_average}/10`}>
                      {renderStars(movie.vote_average)}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <button
                        className="heart-button"
                        onClick={() => handleWishlist(movie)}
                      >
                        {wishlist.includes(movie.id) ? <AiFillHeart /> : <AiOutlineHeart />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <MovieIntroSection />
    </div>
  );
};

export default MoviesList;
