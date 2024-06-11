import ReactDom from "react-dom/client";
import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
