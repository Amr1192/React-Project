import React, { useEffect, useState } from "react";
import TVCard from "../components/TVCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  return (
    <div className="container p-4">
      <h2 className="text-2xl font-semibold mb-6">Watchlist</h2>
      <div className="row">
        {wishlist.map((tv) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={tv.id}>
            <TVCard tv={tv} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
