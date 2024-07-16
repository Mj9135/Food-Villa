import { useEffect, useState, useContext } from "react";
import { restaurantList, imgUrl } from "../constants/config";
import Shimmer from "./Shimmer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleResetSearch = () => {
    setSearchText(""); // Reset the search text
    navigate("/"); // Navigate to the home page
    setFilteredRestaurants(restaurants);
  };
  //Early return
  if (!restaurants) return null;
  if (filteredRestaurants?.length === 0 && searchText)
    return (
      <div className="m-4 p-4 text-center  md:h-[400px] md:mt-20 md:my-20">
        <h1 className="text-2xl font-bold text-gray-700">
          Your Search have no any results...
        </h1>
        <button
          onClick={handleResetSearch}
          className="my-4 p-2 rounded-md bg-orange-400 hover:bg-orange-600/85 text-white font-bold shadow-lgs"
        >
          <Link to="/">Go To Home</Link>
        </button>
      </div>
    );

  return restaurants && restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container bg-gray-100  flex md:pb-8 md:pt-8 sm:pb-8 sm:pt-8 justify-center items-center pt-6 ">
        <input
          type="text"
          placeholder="Search a restaurent you want... "
          className="search w-40 sm:w-96 md:w-96 p-2   border-gray-500 border-r-0 border outline-none "
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
          className=" px-5 hover:bg-green-800 hover:border-green-800  rounded-r-md ease-in-out duration-150 border-[#c27100]  border  cursor-pointer bg-orange-400 p-2 text-white"
        >
          Search
        </button>
      </div>
      <div className="flex contain min-h-[565px] pb-24 flex-wrap items-start justify-center gap-8 pt-7 px-4 md:px-11 md:pb-8 bg-gray-100">
        {filteredRestaurants?.map((restaurant) => (
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
