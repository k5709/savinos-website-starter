import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import About from "../pages/About";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link to="/" style={linkStyle}>
          <img
            src="https://img1.wsimg.com/isteam/ip/8f3bc050-9c97-48f1-996c-788af343f41f/9630D5B5-E0D5-4A37-A4B9-278C51F3BD45.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt="Restaurant Logo"
            style={logoImgStyle}
          />
        </Link>
      </div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" style={linkStyle}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/order" style={linkStyle}>
              Order Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: "white",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px rgb(135, 206, 235)",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
};

const logoImgStyle = {
  width: "220px",
  borderRadius: "50%",
};

const navStyle = {
  display: "flex",
  paddingLeft: "75px",
};

const ulStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  padding: "30px",
  fontSize: "1.3em",
  transition: "color 0.3s ease",
};

linkStyle[":hover"] = {
  color: "green", // Darker shade of gray
  textDecoration: "underline",
  backgroundColor: "#f0f0f0", // Light gray background
  border: "1px solid #ccc", // Light gray border
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle box shadow
};

export default Header;
