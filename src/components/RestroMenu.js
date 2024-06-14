import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../constants/config";
import Shimmer from "./shimmer";
import axios from "axios";

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
  const fetchMenu = async () => {
    try {
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const menuApi =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId;

      const response = await axios.get(proxyUrl + encodeURIComponent(menuApi));
      const json = response.data;

      setRestro(json.data);
    } catch (error) {
      console.log("Error fetching menu: ", error);
    }
  };

  return !restro ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h3>This Is Menu Page</h3>
        <h3>City: {city}</h3>
        <h3>Name: {name}</h3>
        <img src={imgUrl + cloudinaryImageId} alt={name} />
        <h4>Rating: {avgRatingString} Star</h4>
        <h4>Cost For Two: {costForTwoMessage}</h4>
        <h2>Cuisines: {cuisines.join(" , ")}</h2>
      </div>
      <div>
        <ul>
          {menu.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
