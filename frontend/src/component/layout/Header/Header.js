import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#6E260E",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "#FFE5B4",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.6vmax",
  link1Color: "#343434",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1.6vmax",
  profileIconUrl: "/login",
  profileIconColor: "#343434",
  searchIconColor: "#343434",
  cartIconColor: "#343434",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1.6vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;