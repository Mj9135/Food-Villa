import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useOnline from "./utils/useOnline";
import logo from "../assets/logo.png";
const Header = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnline();

  const handleLogin = () => setLogin(!login);

  return (
    <header className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3 w-full m-0 md:m-auto md:w-4/5 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold w-[240px] h-[100px] ml-[-110px] mt-2"
        >
          <img src={logo} alt="" />
        </Link>

        <ul className="fixed bottom-0 flex p-2 justify-around bg-white  w-full mr-[-102px] md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto">
          <Link to="/">
            <li className="px-3 py-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-3 py-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-3 py-2">Contact</li>
          </Link>

          <Link to="/cart">
            <li className="px-3 py-2 text-gray-700 relative text-2xl">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute text-sm font-bold text-white bg-gray-500 px-1 right-1 top-[-1px] rounded-full">
                {cartItems.length}
              </span>
            </li>
          </Link>

          <li className="px-3 py-2 rounded-lg bg-gray-700 border-2 transition duration-0 text-white hover:bg-white hover:text-gray-700 hover:duration-150 hover:border-gray-700">
            <div
              className=""
              style={
                isOnline
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "gray" }
              }
            ></div>
            <button className="w-auto" onClick={handleLogin}>
              {login ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
