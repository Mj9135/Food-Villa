import { useEffect, useState, useContext } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./Shimmer";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import useRestaurent from "./utils/useRestaurent";
import RestaurantCard from "./RestaurantCard";
import userContext from "./utils/userContext";
const Body = () => {
  const { user, setUser } = useContext(userContext);
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
      <div className="search-container flex mb-10 justify-center items-center mt-10 ">
        <input
          type="text"
          placeholder="Search a restaurent you want... "
          className="search w-96 p-2  border-gray-500 border-r-0 border outline-none "
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
          className=" px-5 hover:bg-green-800 hover:border-green-800  rounded-r-md ease-in-out duration-150 border-[#c27100]  border  cursor-pointer bg-[#c26100] p-2 text-white"
        >
          Search
        </button>
        {/* <input
          className="border border-black p-2 ml-5"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          className="border px-7 border-black p-2 ml-5"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        /> */}
      </div>
      <div className="flex contain flex-wrap justify-around gap-5 mt-7 px-56">
        {filteredRestaurants.map((restaurant) => (
          <Link
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
