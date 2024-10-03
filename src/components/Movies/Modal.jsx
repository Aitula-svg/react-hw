import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ onHandleClick }) => {
  const [namePage, setNamePage] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [rating, setRating] = useState("");
  const [movieEditor, setMovieEditor] = useState([]);

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const habdleName = (e) => {
    setNamePage(e.target.value);
  };

  const handleEditUrl = (e) => {
    setEditUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieEditor([...movieEditor, namePage, editUrl, closeModal]);
    const newMovie = {
      id: Date.now().toString(),
      url: editUrl,
      title: namePage,
      rating:(0)
    };
    setName("");
    setEditUrl("");
    onHandleClick(newMovie)
  };

  return (
    <div className="modal-conteiner">
      <div className="modal">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Название</label>
            <input
              id=""
              name="name"
              onChange={habdleName}
              type="text"
              value={namePage}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Рейтинг</label>
            <input
              id=""
              name="rating"
              onChange={handleRating}
              type="text"
              value={rating}
              placeholder="Rating"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Ссылка</label>
            <input
              id=""
              name="url"
              onChange={handleEditUrl}
              type="url"
              value={editUrl}
              placeholder="url"
            />
          </div>
          <button onClick={onHandleClick} type="submit" className="btn">
            Изменить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
