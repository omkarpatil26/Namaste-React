import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const networkStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status : {networkStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() =>
              btnState === "Login"
                ? setBtnState("Logout")
                : setBtnState("Login")
            }
            className="buttonLogin"
          >
            {btnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
