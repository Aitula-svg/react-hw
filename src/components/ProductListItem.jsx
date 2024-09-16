import { Ratings } from "./rating";
import { Button } from "./UI/Button";

export const ProductListItem = ({ image, name, rating, priceCents }) => {
  console.log(rating);

  return (
    <li className="cart">
      <div >
        <div className="carton-one">
          <img className="carton" src={image} alt="" />
        </div>
        <p> {name}</p>
       <div className="buka">
       <Ratings   rating={rating} />
       
       <div className="select-one">
       <span id="price">${priceCents}</span>
        <select name="" id="">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
        </select>
       </div>
       </div>
      </div>
      <div className="button-first">
        <Button>Add to Card</Button>
      </div>
    </li>
  );
};
