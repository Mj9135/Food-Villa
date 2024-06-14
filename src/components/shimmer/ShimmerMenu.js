import React from "react";
import "./ShimmerMenu.css";

const ShimmerMenu = () => {
  return (
    <div>
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div key={index} className="ShimmerMenuContainer">
            <div className="ShimmerMenucard"></div>
            <h1 className="ShimmerMenuTitle"></h1>
            <h1 className="ShimmerMenuSubtitle"></h1>
            <h1 className="ShimmerMenuContent"></h1>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
