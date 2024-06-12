import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
