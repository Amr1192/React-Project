import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../App.css";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=5102f2a83459803e5af9d14c8b1a010a&query=${query}`)
        .then((res) => {
          setResults(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);

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
        <h1 className="heading-color heading">Search Results for "{query}"</h1>
        <div className="row gy-4">
          {results.length > 0 ? (
            results.map((movie) =>
              movie.poster_path ? (
                <div key={movie.id} className="col-6 col-md-3">
                  <div className="card h-100 shadow-sm border-0 rounded custom-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title text-truncate">{movie.title}</h5>
                      <p className="text-muted small mb-1">{movie.release_date}</p>
                      <div title={`Rating: ${movie.vote_average}/10`}>
                        {renderStars(movie.vote_average)}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <button className="heart-button" onClick={() => handleWishlist(movie)}>
                          {wishlist.includes(movie.id) ? <AiFillHeart /> : <AiOutlineHeart />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <p>No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
