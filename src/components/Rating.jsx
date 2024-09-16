import Rating0 from "../ratings/rating-0.png";
import Rating05 from "../ratings/rating-05.png";
import Rating10 from "../ratings/rating-10.png";
import Rating15 from "../ratings/rating-15.png";
import Rating20 from "../ratings/rating-20.png";
import Rating25 from "../ratings/rating-25.png";
import Rating30 from "../ratings/rating-30.png";
import Rating35 from "../ratings/rating-35.png";
import Rating40 from "../ratings/rating-40.png";
import Rating45 from "../ratings/rating-45.png";
import Rating50 from "../ratings/rating-50.png";

const Ratingimg = {
  0: Rating0,
  0.5: Rating05,
  1.0: Rating10,
  1.5: Rating15,
  2.0: Rating20,
  2.5: Rating25,
  3.0: Rating30,
  3.5: Rating35,
  4.0: Rating40,
  4.5: Rating45,
  5.0: Rating50,
};
export function Ratings({ rating }) {
  const ratingtg = rating.stars;
  const ratingtg1 = Ratingimg[ratingtg] || Rating0;
  return (
    <div className="rating-two">
      <img className="rating" src={ratingtg1}></img>
      <p >{rating.count}</p>
      {/* <div>{ratingtg}</div> */}
    </div>
  );
}
export default Ratings
