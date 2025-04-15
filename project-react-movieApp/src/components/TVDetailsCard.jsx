import React from "react";
import { Link } from "react-router-dom";

export default function TVDetailsCard(props) {
  const { tvDetails, vote, HandleIsFavorite, favorite } = props;
  return (
    <div
      style={{
        backgroundColor: "rgba(102, 99, 97, 0.8)",
        minHeight: "100vh",
      }}
    >
      <div className="row d-flex mx-5 py-5">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
            alt={tvDetails.name}
            className="img img-fluid"
          />
        </div>

        <div className="col-7 pt-5">
          <h1 className="fw-bold text-white">{tvDetails.name}</h1>
          <p className="lead text-white">{`(${tvDetails.first_air_date})`}</p>

          <span>
            {Array(5)
              .fill()
              .map((_, index) =>
                index < vote ? (
                  <i
                    className="bi bi-star-fill text-warning fs-5 me-1"
                    key={index}
                  ></i>
                ) : (
                  <i
                    className="bi bi-star text-warning fs-5 me-1"
                    key={index}
                  ></i>
                )
              )}
          </span>

          {/* <span>
        {Array.from({ length: 5 }, (_, index) =>
          index < vote ? (
            <i
              className="bi bi-star-fill text-warning fs-5 me-1"
              key={index}
            ></i>
          ) : (
            <i
              className="bi bi-star text-warning fs-5 me-1"
              key={index}
            ></i>
          )
        )}
      </span> */}

          <p className="mt-5 text-white">{tvDetails.tagline}</p>
          <h3 className="text-warning ">Overview</h3>
          <p className=" text-light fw-bolder ">{tvDetails.overview}</p>

          <Link to="/wishlist" className="btn btn-warning  mt-5 ">
            Go to Wishlist
          </Link>
        </div>

        <div className="col-1">
          <Link href="#" onClick={(e) => HandleIsFavorite(e)}>
            {favorite ? (
              <i className="bi bi-heart-fill text-warning fs-5 "></i>
            ) : (
              <i className="bi bi-heart text-warning fs-5"></i>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
