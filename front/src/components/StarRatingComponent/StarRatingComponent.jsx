import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import styles from "./StarRatingComponent.module.css";

export default function StarRatingComponent() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className={styles.input}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={styles.star}
              size={20}
              color={ratingValue <= (hover || rating) ? "#004e98" : "#95a3ba"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
