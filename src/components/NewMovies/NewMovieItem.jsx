import React from "react";
import Button from "../UI/Button";
import "./NewMovieItem.css";

const NewMovieItem = ({ id, url, title, rating,deleteBtn }) => {
  return (
    <li className="carts">
      <div>
        <img className="img-cart" src={url} alt="" />
      </div>
      <div className="child-cart">
        <p className="title-cart">{title}</p>

        <b><span   className="rating-cart">{rating}/5 stars</span></b>

        <Button className="button-edit">Edit</Button>
        <Button onClick={() => deleteBtn(id)}  className="button-delete">Delete</Button>
      </div>
    </li>
  );
};

export default NewMovieItem;


