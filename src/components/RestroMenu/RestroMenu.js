import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../constants/config";
import Shimmer from "../shimmer/ShimmerCard";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShimmerMenu from "../shimmer/ShimmerMenu";
import "./RestroMenu.css";
import { menuImg } from "../../constants/config";
const RestroMenu = () => {
  const [restro, setRestro] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

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
  const fetchMenu = async () => {
    try {
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const menuApi =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId;

      const response = await axios.get(proxyUrl + encodeURIComponent(menuApi));
      const json = response.data;
      console.log(json.data);
      setRestro(json.data);
    } catch (error) {
      console.log("Error fetching menu: ", error);
    }
  };

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
      <div className="menu-item">
        <ul className="menu-list">
          {menu.map((item) => (
            <li className="menuu" key={item?.card?.info?.id}>
              <div className="menu-name">
                {item?.card?.info?.name}
                {item?.card?.info?.price / 100}
                {item?.card?.info?.description}
              </div>

              <div className="hkjhk">
                <img src={menuImg + item?.card?.info?.imageId} alt="img" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
