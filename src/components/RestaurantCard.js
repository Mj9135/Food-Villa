import { restaurantList, imgUrl } from "../constants/config";
import StarRating from "./StarRating";
import { useContext } from "react";
import userContext from "./utils/userContext";
const RestaurantCard = ({
  name,
  areaName,
  cloudinaryImageId,
  avgRating,
  cuisines,
  sla,
}) => {
  const truncateName = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  const { user } = useContext(userContext);
  const truncatedCuisines = cuisines.slice(0, 1).join(", ") + "...";

  return (
    <div className="md:w-[250px] w-[260px] card  flex bg-white justify-start flex-col rounded-xl cursor-pointer p-2  mx-[-8px] shadow-lg hover:scale-95 ease-in-out duration-100">
      <img
        className="md:w-[250px] md:h-[160px] w-[260px] h-[180px] rounded-xl pt-1"
        src={imgUrl + cloudinaryImageId}
        alt={name}
      />
      <div className="flex mt-1 flex-col p-1 px-2 gap-1 justify-start items-start">
        <h2 className="text-[18px] font-[700] truncate">
          {truncateName(name, 20)}
        </h2>
        <div className="flex items-center">
          <StarRating className="font-semibold" avgRatingString={avgRating} />

          <div className="px-3 ml-16 text-base font-semibold">
            {sla.slaString}
          </div>
        </div>
        <div className="truncate">{truncatedCuisines}</div>
        <div className="cost">{areaName}</div>
        {/* <h1>{user.name}</h1>
        <h2>{user.email}</h2> */}
      </div>
    </div>
  );
};
export default RestaurantCard;
