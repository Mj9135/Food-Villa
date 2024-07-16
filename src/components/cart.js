import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuItemsList from "./MenuItemList";
import { clearCart } from "./utils/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  let cartItemsValue = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItemsValue.length === 0) {
    return (
      <div className="m-4 p-4 text-center h-[580px] md:h-[400px] md:mt-52 md:my-20">
        <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
        <p className="text-gray-500 my-4">
          You can go to home page to view more restaurants
        </p>
        <button className="my-4 p-2 rounded-md bg-orange-400 hover:bg-orange-600/85 text-white font-bold shadow-lgs">
          <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
        </button>
      </div>
    );
  }

  return (
    <div className=" w-[350px] md:w-11/12 md:mx-20  md:my-4 flex flex-col md:flex-row justify-between items-center relative">
      <div className="md:m-4 md:w-10/12 w-[350px] ">
        <div className="">
          <MenuItemsList data={cartItemsValue} />
        </div>
      </div>

      <div className="md:my-4 w-[319px] sm:w-[500px] ">
        <div className="bg-white   rounded-lg border-2 px-3 md:w-[400px] border-gray-400 shadow-lg">
          <div className="p-2  ">
            <div className="mt-4">
              <p className="font-mono font-semibold my-1">
                Total Cart Item: {cartItemsValue.length}
              </p>
              <p className="font-mono font-semibold my-1">
                Final Amount:₹{" "}
                {cartItemsValue.reduce(
                  (total, item) =>
                    total +
                    (item.card.info.price || item.card.info.defaultPrice) *
                      item.quantity,
                  0
                ) / 100}{" "}
              </p>
            </div>
            <div className="mt-4 mb-2 flex justify-between items-center gap-8 ">
              <button
                className="relative md:px-4 w-[150px] md:w-[200px]  md:h-10 border-2 my-6 border-green-500 border-collapse text-black font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                onClick={handleClearCart}
              >
                <Link to="/thankyou">Proceed to Checkout!</Link>
              </button>
              <button
                className=" relative w-[120px] h-[50px] md:h-[40px] border-2  border-green-500 border-collapse text-black font-bold overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
