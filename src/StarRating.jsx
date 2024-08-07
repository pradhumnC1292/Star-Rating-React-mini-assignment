import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [emoji, setEmoji] = useState("");

  const handleClick = (value) => {
    setRating(value);
    updateEmoji(value);
  };

  const updateEmoji = (rating) => {
    let emojiChar;
    switch (rating) {
      case 1:
        emojiChar = "😣"; // sad face
        break;
      case 2:
        emojiChar = "😞"; // disappointed face
        break;
      case 3:
        emojiChar = "😐"; // neutral face
        break;
      case 4:
        emojiChar = "😄"; // smiling face
        break;
      case 5:
        emojiChar = "😎"; // cool face
        break;
      default:
        emojiChar = "😣"; // sad face
    }
    setEmoji(emojiChar);
  };

  return (
    <div className="container">
      <h1>Star Rating</h1>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? "active" : ""}`}
            onClick={() => handleClick(value)}
          >
            &#9734;
          </span>
        ))}
      </div>
      <p>Click to set the rating</p>
      <div className="emoji">{emoji}</div>
    </div>
  );
};

export default StarRating;
