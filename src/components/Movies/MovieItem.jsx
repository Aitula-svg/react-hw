import React from "react";
import Button from "../UI/Button";
import "./MovieItem.css";
import Modal from "./Modal";
import { useState } from "react";

export const MovieItem = ({ url, title, rating, id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <li className="card">
      <div>
        <img className="panda" src={url} alt={title} />
      </div>
      <div className="card-item">
        <p>{title}</p>
        <span>{rating}/5 stars</span>
      </div>

      <div className="button-movie">
        <Button onClick={handleClick}>EDIT</Button>
        <Button>DELETE</Button>
      </div>
      {modalOpen ? <Modal onHandleClick={handleClick} id={id} /> : null}
    </li>
  );
};

