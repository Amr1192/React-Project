
import React from 'react';
import './MovieIntroSections.css'; 

const MovieIntroSections = () => {
  return (
    <div className="sections-wrapper container px-4">
      <div className="section-dark">
        <div className="section-content">
          <div className="text-content">
            <h2 className="fw-bold">
              <span>Enjoy Your Movie Time</span>
            </h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur corporis cupiditate dolores ex explicabo facilis ipsam.
            </p>
          </div>
          <div className="image-content">
            <img
              src="../images/intro.gif" 
              alt="Movie Watching"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="shop-section rounded my-5">
        <div className="section-content">
          <div className="image-content">
            <img
              src="../images/popcorn.jpg" 
              alt="Popcorn"
              className="img-fluid"
            />
          </div>
          <div className="text-content">
            <h2 className="fw-bold">Buy popcorn and cola online</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur dolor eum.
            </p>
            <button className="shop-button mt-3">Open shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieIntroSections;