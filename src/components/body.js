import { useEffect, useState } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./shimmer";

const RestaurantCard = ({ name, areaName, cloudinaryImageId, avgRating }) => {
  return (
    <div className="Card">
      <img src={imgUrl + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <h4>{avgRating} star</h4>
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
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.8045665&lng=86.2028754"
    );
    const json = await data.json();
    const fetchedRestaurants =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestaurants(fetchedRestaurants);
    setFilteredRestaurants(fetchedRestaurants); // Initialize filteredRestaurants with fetched restaurants
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
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
