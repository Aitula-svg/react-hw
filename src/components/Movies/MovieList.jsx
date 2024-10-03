import React from "react";
// import MovieItem from "./MovieItem";
import "./MovieList.css";

 const MovieList = ({ movies }) => {
  return (
    <ul className="card-head">
      {movies.map((item, id) => (
        <MovieItem key={id} title={item.title}  url={item.url} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;


