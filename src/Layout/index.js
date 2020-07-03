import React from "react";
import HeaderHotel from "../components/HeaderHotel";
import FooterHotel from "../components/FooterHotel";
import "./style.scss";
function Layout({ isLoggedIn, children }) {
  return (
    <div className="wrapper">
      <HeaderHotel isLoggedIn={isLoggedIn} />
      <div className="container-body">{children}</div>
      <FooterHotel />
    </div>
  );
}

export default Layout;
