import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../constants/config";
import Shimmer from "../shimmer/ShimmerCard";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShimmerMenu from "../shimmer/ShimmerMenu";
import "./RestroMenu.css";
import { menuImg } from "../../constants/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"; // FontAwesome 6 icon
import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = () => {
  const { resId } = useParams();
  const restro = useRestroMenu(resId);
  const {
    city = "",
    name = "",
    cloudinaryImageId = "",
    cuisines = [],
    costForTwoMessage = "",
    avgRatingString = "",
  } = restro?.cards?.[2]?.card?.card?.info || {};
  const menu =
    restro?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];
  console.log(menu);
  return !restro ? (
    <ShimmerMenu />
  ) : (
    <div className="menu">
      <div className="menu-details">
        <div className="menu-name">
          <h2>{name}</h2>
          <p>{cuisines.join(" , ")}</p>
          <p>{city}</p>
          <h4>{costForTwoMessage}</h4>
        </div>
        <div className="menu-img">
          <img src={imgUrl + cloudinaryImageId} alt={name} />
        </div>
        <div className={`starx ${avgRatingString >= 4 ? "greenx" : "yellowx"}`}>
          <i className="fas fa-star"></i>
          <h4>{avgRatingString}</h4>
        </div>
      </div>
      <h1 className="menu-head">Menu</h1>
      <div className="menu-item">
        <ul className="menu-list">
          {menu.map((item) => (
            <li className="menuu" key={item?.card?.info?.id}>
              <div className="menu-namee">
                <div className="namee"> {item?.card?.info?.name}</div>
                <div className="namee-rupee">
                  {" "}
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    style={{ marginRight: "0.2rem" }}
                  />
                  {item?.card?.info?.price / 100}
                </div>
                <div className="menu-desc">{item?.card?.info?.description}</div>
              </div>
              <div className="menu-img">
                <img src={menuImg + item?.card?.info?.imageId} alt="img" />
                <button>ADD</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
