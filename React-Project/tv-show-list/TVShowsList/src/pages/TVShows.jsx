import React, { useEffect, useState } from "react";
import TVCard from "../components/TVCard";
import { getTVShows, searchTVShows } from "../apis/config";
import Pagination from "../components/Pagination"

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = searchTerm
        ? await searchTVShows(searchTerm, page)
        : await getTVShows(page);

      const shows = res.data.results.map((item) => ({
        id: item.id,
        title: item.name,
        date: item.first_air_date,
        rating: Math.round(item.vote_average * 10),
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      }));

      setTvShows(shows);
    } catch (err) {
      console.error("Error fetching TV shows:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, page]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">TV Shows</h2>
      <input
        type="text"
        placeholder="Search TV shows..."
        value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        onChange={handleSearchChange}
        className="border p-2 w-full mb-4 rounded search-input"
      />
<div className="container">
  <div className="row">
    {tvShows.map((tv) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={tv.id}>
        <TVCard tv={tv} />
      </div>
    ))}
  </div>
</div>

      <div className="mt-6">
        <Pagination currentPage={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default TVShows;
