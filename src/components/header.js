import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import userContext from "./utils/userContext";
const Header = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(userContext);
  return (
    <div className="flex cursor:pointer justify-between items-center h-20 px-4 bg-white shadow-lg">
      <Link to="/">
        <div>
          <h1 className="text-xl color font-bold">FoodCourt</h1>
        </div>
      </Link>
      <div className="flex gap-6">
        <ul className="flex gap-6 list-none">
          {/* <h1 className="border border-black px-6 font-bold py-2">
            {user.name}
          </h1> */}
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
              Contact
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="text-black no-underline">
              Instamart
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
