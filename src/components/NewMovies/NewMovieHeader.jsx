import React from "react";
import Button from "../UI/Button";
import { useState } from "react";
import "./NewMovieHeader.css"
import NewMovieList from "./NewMovielist";
import { NewModal } from "../UI/NewModal";

const NewMovieHeader = () => {
  const [open, setOpen] = useState(false)
  const [openModal,setOpenModal] = useState(false)
 
  const openedModal = () => {
    setOpenModal(true)
  }


  const closeModal = () => {
    setOpenModal(false)
  }
  // const [data,setData] = useState({})
  
  const getData = (modal) =>{
   setMovies(p=>[...p,modal])
  }
  const [movies, setMovies] = useState([
    {
      id: 1,
      url: "https://shorturl.at/09rkI",
      title: "KungFu-Panda",
      rating: 0,
    },
    {
      id: 1,
      url: "https://shorturl.at/8AXNN",
      title: "Titanic",
      rating: 0,
    },

    {
      id: 2,
      url: "https://shorturl.at/8R6iU",
      title: "Slovo patsana",
      rating: 0,
    },

    {
      id: 3,
      url: "https://shorturl.at/O9IHy",
      title: "Wednesday",
      rating: 0,
    },
  ]);

  const deleteBtn = (todoId) => {
    console.log(todoId);
    setMovies(movies.filter((item) => item.id !== todoId));
  };

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <div className="favorite-movies">
        <h1>Favorite movies</h1>
        <Button   onClick={() => {
          setOpen(!open)
        }} className="head-button">Add new movies</Button>
      </div>
      <div className="conteiner-cart">
        <NewMovieList  deleteBtn={deleteBtn}  onmovies={movies}/>
        {
            open && <NewModal onCloseModal={closeModal}  onModal={getData}  />
        }
      </div>
    </div>
  );
};

export default NewMovieHeader;

// onClick={() => {
  // setOpen(!open)
