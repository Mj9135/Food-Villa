import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "./utils/cartSlice.js";
import { imgUrl } from "../constants/config.js";
import PropTypes from "prop-types";

function MenuItemsList({ data }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddToCart = (item) => {
    console.log("Added Item to cart");
    dispatch(addItem(item));
  };

  const handleRemoveFormCart = (item) => {
    dispatch(removeItem(item));
  };

  const handleDecreaseQuanitity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncreaseQuanitity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const getItemQuanitity = (itemId) => {
    const cartItem = cartItems.find((item) => item.card.info.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="">
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="border-2 border-neutral-200 rounded-lg m-4 p-4 flex justify-between items-center gap-2 shadow-md h-[190px]"
        >
          <div className="w-3/5 p-2">
            <div>
              <h2 className="font-bold">{item.card.info.name}</h2>
              <h3 className="font-semibold text-sm">
                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </h3>
            </div>
            <p className="text-sm text-gray-500 line-clamp-3 text-ellipsis overflow-hidden text-wrap">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/5 flex flex-col items-center relative">
            <img
              className="w-32 md:w-40 h-28  rounded-md shadow-lg"
              src={imgUrl + item.card.info.imageId}
              alt="Dish Image"
            />
            <div className="absolute bottom-[-10px] w-full mt-8  bg-white/20 ">
              {getItemQuanitity(item.card.info.id) > 0 ? (
                <div className="flex justify-center items-center w-full mb-[-6px]  ">
                  <button
                    className="relative text-center px-3 py-1 sm:py-1  sm:px-4  rounded-r-none text-lg text-black  font-bold overflow-hidden bg-orange-400 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-101 hover:text-white hover:shadow-lg active:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg before:rounded-r-none hover:before:left-0"
                    onClick={() => handleDecreaseQuanitity(item)}
                  >
                    -
                  </button>
                  <span className="px-2 py-1 sm:py-1 sm:px-4  bg-white font-mono text-lg font-semibold rounded-r-none rounded-l-none rounded-md">
                    {getItemQuanitity(item.card.info.id)}
                  </span>
                  <button
                    className="relative px-3 py-1 text-center sm:py-1 sm:px-4  text-lg text-black  font-bold overflow-hidden rounded-l-none bg-orange-400 rounded-xl transition-all duration-400 ease-in-out shadow-md hover:scale-101 hover:text-white hover:shadow-lg active:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    onClick={() => handleIncreaseQuanitity(item)}
                  >
                    +
                  </button>
                  {/* <button
                    className="relative px-3 py-1 sm:py-2 sm:px-4 text-center md:py-1 md:px-6 text-black text-base font-bold overflow-hidden bg-red-400 rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-red-500 before:to-red-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    onClick={() => handleRemoveFormCart(item)}
                  >
                    x
                  </button> */}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <button
                    className="relative py-1 px-4 sm:py-1  text-center text-black text-base font-bold overflow-hidden bg-green-400 rounded-md transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add+
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

MenuItemsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MenuItemsList;
