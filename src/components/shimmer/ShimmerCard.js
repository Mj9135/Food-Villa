import React from "react";

const Shimmer = () => {
  return (
    <div className="container">
      <div className="shimmer-wrapper">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-thumbnail"></div>
              <h1 className="shimmer-title short"></h1>
              <h1 className="shimmer-title long"></h1>
              <h1 className="shimmer-title"></h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
