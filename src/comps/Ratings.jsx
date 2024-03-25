import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../css/ratings.module.css";

export default function Ratings() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const setRatingForDish = () => {
    // localStorage.setItem('ratings' ...localStorage.getItem('ratings'), { id: dishId, rating: ratingValue })
    setRating(ratingValue)
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={setRatingForDish}
            />
            <FaStar
              className={styles.star}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#333"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
