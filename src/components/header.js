import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="flex justify-between items-center h-20 px-4 bg-white shadow-lg">
      <div>
        <h1 className="text-xl font-bold">FoodCourt</h1>
      </div>
      <div className="flex gap-6">
        <ul className="flex gap-6 list-none">
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
          <li>
            <Link to="/shim" className="text-black no-underline">
              Shimmer
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
