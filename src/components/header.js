import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </a>
  );
};
const Header = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/instamart"
            >
              Instamart
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {login ? (
        <button
          className="btn1"
          onClick={() => {
            setLogin(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          className="btn1"
          onClick={() => {
            setLogin(true);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};
export default Header;
