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
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
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