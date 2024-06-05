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
            <Link to="/order" style={linkStyle}>
              Order Now
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
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
};

const logoImgStyle = {
  width: "215px",
  height: "200px",
  borderRadius: "50%",
  marginLeft: "-5%",
};

const navStyle = {
  display: "flex",
};

const ulStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "20px",
  fontSize: "1.3em",
};

export default Header;
