import Head from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "../components/utils/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Robin Singh",
    email: "44robin.rs@gmail.com",
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
