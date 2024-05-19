import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{

    const[loginState , setLoginState] = useState("Login")
    const onlineStatus = useOnlineStatus();


    return (
        <div className=" header flex  justify-between bg-pink-200 shadow-lg m-2">
            <div className="img-container w-56">
                <img  src={LOGO_URL}>
                </img>
            </div>

            <div className="nav-items flex items-center " >
                <ul className="flex ">
                    <li className="px-2">Online Status:{onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-2"><Link to={"/"}>Home</Link></li>
                    <li className="px-2"><Link to={"/about"}>About</Link></li>
                    <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-2"><Link to={"/grocery"}>Grocery</Link></li>
                    <button 
                    className="login-button px-2 -mt-6" 
                    onClick={()=>{
                       loginState === "Login" ? setLoginState("Logout") : setLoginState("Login");
                    }}>{loginState}</button>

                    <li className=" w-24 -mt-5 "><img src='https://i.pinimg.com/736x/d6/39/07/d6390726609aa16dddbb604a7d5afe19.jpg'></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;