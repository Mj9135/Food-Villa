import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import userContext from "./utils/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(userContext);
  return (
    <div className="flex cursor:pointer justify-between items-center h-20  sm:w-full md:w-full  px-4 bg-white shadow-lg ">
      <Link to="/">
        <div>
          <h1 className="text-xl  font-bold">FoodCourt</h1>
        </div>
      </Link>
      <div className=" md:flex gap-6 hidden sm:block md:justify-center md:items-center">
        <ul className="flex gap-8 list-none">
          <li>
            <Link to="/" className="text-black no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black no-underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black no-underline">
              Cart
            </Link>
          </li>
        </ul>
        <div>
          <button
            className="border-2 px-4 py-2"
            onClick={() => setLogin(!login)}
          >
            {login ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
