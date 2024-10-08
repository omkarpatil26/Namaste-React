import { LOGO_URL } from "../utils/constants";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnState, setBtnState] = useState("Login");
  const networkStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-5">
          <li>Online status : {networkStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/Namaste-React">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/Namaste-React/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/Namaste-React/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/Namaste-React/cart">
              Cart - {cartItems.length} items
            </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/Namaste-React/grocery">Grocery</Link>
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
          <li className="px-4 font-bold">user : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
