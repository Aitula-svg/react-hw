import React from "react";

import NewMovieItem from "./NewMovieItem";

 const NewMovieList = ({ onmovies,deleteBtn}) => {
  return (
    <ul className="card-head">
      {onmovies.map((item, id) => (
        <NewMovieItem  key={id}  {...item} deleteBtn={deleteBtn} />
      ))}
    </ul>
  );
};

export default NewMovieList;


