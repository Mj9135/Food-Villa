import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../constants/config";
import { ShimmerMenu } from "./Shimmer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { menuImg } from "../constants/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import useRestroMenu from "./utils/useRestroMenu";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./utils/cartSlice";

const RestroMenu = () => {
  const { resId } = useParams();
  const restro = useRestroMenu(resId);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.card.info.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

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
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-4 shadow-2xl w-full md:w-[830px] gap-4 items-center justify-between md:h-[150px] rounded-lg px-8">
        <div className="flex flex-col w-[60%] gap-2 pt-4">
          <h2 className="text-[18px] font-bold">{name}</h2>
          <p>{cuisines.join(" , ")}</p>
          <p>{city}</p>
          <h4 className="font-bold">{costForTwoMessage}</h4>
        </div>
        <div className="w-[50%]">
          <img
            className="md:w-[160px] w-[150px] md:block rounded-lg h-[110px]"
            src={imgUrl + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="md:block hidden">
          <StarRating avgRatingString={avgRatingString} />
        </div>
      </div>
      <h1 className="text-[28px] mt-4 font-bold">Menu</h1>
      <div className="flex">
        <ul className="flex flex-col">
          {menu.map((item) => (
            <li
              className="flex justify-between border-b-[1px]  border-black min-h-[100px] pb-6 items-center md:w-[800px] m-4"
              key={item?.card?.info?.id}
            >
              <div className=" max-w-[55%] md:max-w-[70%] h-[120px] overflow-hidden">
                <div className="namee font-semibold">
                  {item?.card?.info?.name}
                </div>
                <div className="namee-rupee">
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    style={{ marginRight: "0.2rem" }}
                  />
                  {item?.card?.info?.price / 100}
                </div>
                <div className="menu-desc">{item?.card?.info?.description}</div>
              </div>
              <div className="max-w-[50%]">
                <img
                  className="md:w-[156px] md:h-[120px] w-[130px] h-[100px] rounded-md"
                  src={menuImg + item?.card?.info?.imageId}
                  alt="img"
                />
                <div className="flex justify-center items-center mt-[-16px]">
                  {getItemQuantity(item.card.info.id) > 0 ? (
                    <div className="flex justify-center items-center">
                      <button
                        className="relative text-center px-3 py-1 sm:py-1 sm:px-4 rounded-r-none text-lg text-black font-bold overflow-hidden bg-orange-400 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-101 hover:text-white hover:shadow-lg active:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg before:rounded-r-none hover:before:left-0"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span className="px-2 py-1 sm:py-1 sm:px-4 bg-white font-mono text-lg font-semibold rounded-r-none rounded-l-none rounded-md">
                        {getItemQuantity(item.card.info.id)}
                      </span>
                      <button
                        className="relative px-3 py-1 text-center sm:py-1 sm:px-4 text-lg text-black font-bold overflow-hidden rounded-l-none bg-orange-400 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-101 hover:text-white hover:shadow-lg active:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddItem(item)}
                      className="relative py-1 px-4 sm:py-1 text-center text-black text-lg font-bold overflow-hidden bg-orange-400 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                    >
                      Add+
                    </button>
                  )}
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
