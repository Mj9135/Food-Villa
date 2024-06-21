import { restaurantList, imgUrl } from "../constants/config";
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
export default RestaurantCard;
