import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState , useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{

    const[loginState , setLoginState] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    
    // subscribing to the store using use selector
    const cartItems = useSelector((store)=> store.cart.items);

    console.log(cartItems);


    return (
        <div className=" header flex  justify-between  shadow-lg m-2 bg-green-100">
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

                    <li className="px-2 text-xl font-bold"><Link to={"/cart"}>Cart - {cartItems.length} </Link></li>

                    <li className="px-2 font-bold">{loggedInUser}</li>
                    <li className=" w-24 -mt-5 "><img src='https://i.pinimg.com/736x/d6/39/07/d6390726609aa16dddbb604a7d5afe19.jpg'></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;