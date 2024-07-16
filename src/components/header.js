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
    <header className="sticky top-0 bg-white z-10 shadow-md w-full">
      <div className="p-3 w-full m-0 md:m-auto md:w-4/5 flex justify-between items-center">
        <Link
          to="/"
          className=" w-[140px] h-[50px]   md:w-[250px] md:h-[80px] md:mt-[-10px] md:ml-[-100px]  "
        >
          <img src={logo} alt="" />
        </Link>

        <ul className="fixed ml-[280px]    p-2 justify-around bg-white  w-full md:mr-[-102px] md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto">
          <Link to="/">
            <li className="px-3 hidden md:block py-2 font-mono font-extrabold">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="px-3 hidden md:block py-2 font-mono font-extrabold">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="px-3 hidden md:block py-2 font-mono font-extrabold">
              Contact
            </li>
          </Link>

          <Link to="/cart">
            <li className="md:px-3 md:py-2 pt-3  text-gray-700 relative text-2xl">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute text-sm font-bold mr-[312px] md:z-10 md:mr-[12px] z-[-1] text-white bg-orange-500 px-1 right-1 md:top-[-5px] top-[-2px] rounded-full">
                {cartItems.length}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
