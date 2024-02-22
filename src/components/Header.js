import { LOGO_URL } from "../utils/constants"
import React, {useState} from "react";

const Header = () => {
    const[btnState, setBtnState] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                    <button 
                    onClick={() => btnState === "Login" ? setBtnState("Logout") : setBtnState("Login") }
                    className="buttonLogin">
                        {btnState}</button>

                </ul>
                
            </div>
            
        </div>
    )
}

export default Header;