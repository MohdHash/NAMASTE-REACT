import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = ()=>{

    const[loginState , setLoginState] = useState("Login")

    return (
        <div className="header">
            <div className="img-container">
                <img src={LOGO_URL}>
                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <button 
                    className="login-button" 
                    onClick={()=>{
                       loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
                    }}>{loginState}</button>
                    <li><img src='https://i.pinimg.com/736x/d6/39/07/d6390726609aa16dddbb604a7d5afe19.jpg'></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;