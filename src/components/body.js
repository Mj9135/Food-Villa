import { useEffect, useState } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./shimmer/ShimmerCard";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const RestaurantCard = ({
  name,
  areaName,
  cloudinaryImageId,
  avgRating,
  cuisines,
  sla,
}) => {
  const truncatedCuisines = cuisines.slice(0, 2).join(", ") + "...";
  console.log(sla.slaString);
  return (
    <div className="card">
      <img src={imgUrl + cloudinaryImageId} alt={name} />
      <div className="card-details">
        <h2 className="name">{name}</h2>
        <div className="startt">
          <span className={`star ${avgRating >= 4 ? "green" : "yellow"}`}>
            <i className="fas fa-star"></i>
          </span>

          <h3 class="rate">{avgRating}</h3>
          <div class="minute">{sla.slaString}</div>
        </div>
        <div className="cuisines">{truncatedCuisines}</div>
        <div className="cost">{areaName}</div>
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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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
  if (filteredRestaurants?.length === 0) return <h1>No Results Found</h1>;

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
