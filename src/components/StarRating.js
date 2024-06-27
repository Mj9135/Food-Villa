import React from "react";

const StarRating = ({ avgRatingString }) => {
  const avgRating = parseFloat(avgRatingString);
  let starColor;

  if (avgRating >= 4) {
    starColor = "text-green-700";
  } else if (avgRating >= 3) {
    starColor = "text-yellow-500";
  } else {
    starColor = "text-red-700";
  }

  return (
    <div className="flex items-center">
      <i className={`fas fa-star ${starColor}`}></i>
      <h4 className="ml-2 font-semibold">{avgRatingString}</h4>
    </div>
  );
};

export default StarRating;
