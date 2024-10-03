import React, { useState } from "react";
import "./NewModal.css"

export const NewModal = ({ onModal,oncloseModal }) => {
  const [namePage, setNamePage] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [rating, setRating] = useState("");

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
    

    const newMovieAdd = {
      id: Date.now().toString(),
      title: namePage,
      url: editUrl,
      rating: rating,
    };
    

    onModal(newMovieAdd);
    onhandleClick()


  };

  return (
    <div className="conteiner-mod">
      <div className="modal">
        <form  className="form-modal"onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Название</label>
            <input
              id=""
              name="name"
              onChange={habdleName}
              type="text"
              value={namePage}
              placeholder="Name"
              className="Input-modal"
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
              className="Input-modal"

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
              className="Input-modal"

            />
          </div>
          <button onClick={oncloseModal} type="submit"className="btn">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};
