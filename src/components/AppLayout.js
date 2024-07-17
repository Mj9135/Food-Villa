import Head from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "../hooks/userContext";
import { Provider } from "react-redux";
import store from "../hooks/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Mj Gupta",
    email: "mjguptacse@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Head />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
