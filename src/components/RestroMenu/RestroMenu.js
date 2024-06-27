import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../constants/config";
import { ShimmerMenu } from "../Shimmer";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { menuImg } from "../../constants/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"; // FontAwesome 6 icon
import useRestroMenu from "../utils/useRestroMenu";
import StarRating from "../StarRating";
const RestroMenu = () => {
  const { resId } = useParams();
  const restro = useRestroMenu(resId);
  const {
    city = "",
    name = "",
    cloudinaryImageId = "",
    cuisines = [],
    costForTwoMessage = "",
    avgRatingString = "",
  } = restro?.cards?.[2]?.card?.card?.info || {};
  const menu =
    restro?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];
  return !restro ? (
    <ShimmerMenu />
  ) : (
    <div className="flex flex-col  justify-center items-center">
      <div className="flex shadow-2xl w-[830px] items-center justify-between h-[150px] rounded-lg px-8">
        <div className="flex flex-col  gap-1">
          <h2 className="text-[18px] font-bold">{name}</h2>
          <p>{cuisines.join(" , ")}</p>
          <p>{city}</p>
          <h4 className="font-bold">{costForTwoMessage}</h4>
        </div>
        <div className="">
          <img
            className="w-[160px] rounded-lg h-[110px]"
            src={imgUrl + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div>
          <StarRating avgRatingString={avgRatingString} />
        </div>
      </div>
      <h1 className="text-[28px] mt-4 font-bold">Menu</h1>
      <div className="flex">
        <ul className="flex flex-col">
          {menu.map((item) => (
            <li
              className="flex justify-between  border-b-[1px] border-black  min-h-[100px] pb-4 items-center w-[800px]  m-4"
              key={item?.card?.info?.id}
            >
              <div className="max-w-[70%]">
                <div className="namee"> {item?.card?.info?.name}</div>
                <div className="namee-rupee">
                  {" "}
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    style={{ marginRight: "0.2rem" }}
                  />
                  {item?.card?.info?.price / 100}
                </div>
                <div className="menu-desc">{item?.card?.info?.description}</div>
              </div>
              <div className="max-w-[30%] ">
                <img
                  className="w-[156px] h-[120px] rounded-md"
                  src={menuImg + item?.card?.info?.imageId}
                  alt="img"
                />
                <div className="flex justify-center items-center mt-[-16px]">
                  <button className="w-[70px]  h-[30px] rounded-2xl bg-white border-[1px] border-black ">
                    ADD
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
