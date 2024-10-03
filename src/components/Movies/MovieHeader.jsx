import React from "react";
import Button from "../UI/Button";
import "./MovieHeader.css";
import { useState } from "react";
import MovieList from "./MovieList";

const MovieHeader = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      url: "https://shorturl.at/09rkI",
      title: "KungFu-Panda",
      rating: (0)
    },
    {
      id: 1,
      url: "https://shorturl.at/8AXNN",
      title: "Titanic",
      rating: (0)
    },

    {
      id: 2,
      url: "https://shorturl.at/8R6iU",
      title: "Slovo patsana",
      rating:(0)
    },

    {
      id: 3,
      url: "https://shorturl.at/O9IHy",
      title: "Wednesday",
      rating: (0)
    },
  ]);

  

  // const editHandler = () => {};

  return (
    <div>
      <div className="favorite">
        <h1>Favorite Movies</h1>
        <Button className="">Add Movie</Button>
      </div>
      <div className="header-movie">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MovieHeader;
