import { useEffect, useState } from "react";
import { restaurentList } from "../constants/config";
import { imgUrl } from "../constants/config";

const RestaurentCard = ({ name, areaName, cloudinaryImageId, avgRating }) => {
  return (
    <div className="Card">
      <img src={imgUrl + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};
function filterData(searchText, restaurents) {
  const data = restaurents.filter((restaurent) =>
    restaurent.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurents, setRestaurents] = useState(restaurentList);
  useEffect(() => {
    getRestaurent();
  }, []);
  async function getRestaurent() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.8045665&lng=86.2028754"
    );
    const json = await data.json();
    setRestaurents(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(json);
  }

  return (
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
            const data = filterData(searchText, restaurents);
            setRestaurents(data);
          }}
          className="search-btn"
        >
          Submit
        </button>
      </div>
      <div className="list">
        {restaurents.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent?.info} key={restaurent?.info?.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
