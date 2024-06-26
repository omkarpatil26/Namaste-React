import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const networkStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li>Online status : {networkStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
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
