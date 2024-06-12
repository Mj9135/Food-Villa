import { useEffect, useState } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./shimmer";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

const RestaurantCard = ({
  name,
  areaName,
  cloudinaryImageId,
  avgRating,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={imgUrl + cloudinaryImageId} alt={name} />
      <h2 className="name">{name}</h2>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <div className="details">
        <div className={`star ${avgRating >= 4 ? "green" : "yellow"}`}>
          <i className="fas fa-star"></i> {avgRating}
        </div>
        <div className="cost">{costForTwo}</div>
      </div>
    </div>
  );
};

function filterData(searchText, restaurants) {
  const data = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const proxyUrl = "https://api.allorigins.win/raw?url="; // CORS proxy URL
      const apiUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await axios.get(proxyUrl + encodeURIComponent(apiUrl));
      const json = response.data;

      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error calling API: ", error);
    }
  };

  //Early return
  if (!restaurants) return null;

  return restaurants && restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
          className="search-btn"
        >
          Submit
        </button>
      </div>
      <div className="list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
