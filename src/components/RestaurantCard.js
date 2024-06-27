import { restaurantList, imgUrl } from "../constants/config";
import StarRating from "./StarRating";
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

  const truncatedCuisines = cuisines.slice(0, 2).join(", ") + "...";

  return (
    <div className="w-[200px] card h-[270px] flex justify-start flex-col rounded-xl cursor-pointer p-2 pb-20 mx-[-8px] shadow-lg hover:scale-95 ease-in-out duration-100">
      <img
        className="w-[200px] h-[132px] rounded-xl pt-1"
        src={imgUrl + cloudinaryImageId}
        alt={name}
      />
      <div className="flex mt-1 flex-col p-1 px-2 gap-1 justify-start items-start">
        <h2 className="text-[18px] font-[700] truncate">
          {truncateName(name, 15)}
        </h2>
        <div className="flex items-center">
          <StarRating className="font-semibold" avgRatingString={avgRating} />

          <div className="px-3 text-base font-semibold">{sla.slaString}</div>
        </div>
        <div className="truncate">{truncatedCuisines}</div>
        <div className="cost">{areaName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
