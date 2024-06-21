import { useEffect, useState } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./shimmer/ShimmerCard";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import useRestaurent from "./utils/useRestaurent";
const RestaurantCard = ({
  name,
  areaName,
  cloudinaryImageId,
  avgRating,
  cuisines,
  sla,
}) => {
  const truncatedCuisines = cuisines.slice(0, 2).join(", ") + "...";

  return (
    <div className="card">
      <img src={imgUrl + cloudinaryImageId} alt={name} />
      <div className="card-details">
        <h2 className="name">{name}</h2>
        <div className="startt">
          <span className={`star ${avgRating >= 4 ? "green" : "yellow"}`}>
            <i className="fas fa-star"></i>
          </span>

          <h3 className="rate">{avgRating}</h3>
          <div className="minute">{sla.slaString}</div>
        </div>
        <div className="cuisines">{truncatedCuisines}</div>
        <div className="cost">{areaName}</div>
      </div>
    </div>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurants = useRestaurent();
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please Check Your Internet Connection</h1>;
  }
  //Early return
  if (!restaurants) return null;
  if (filteredRestaurants?.length === 0 && searchText)
    return <h1>No Results Found</h1>;

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
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant?.info?.id}
          >
            {" "}
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;