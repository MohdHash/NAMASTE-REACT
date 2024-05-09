import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{

    const[listOfMenu,setListOfMenu] = useState(null);

    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    
    const fetchMenu = async ()=>{
        const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.9625741&lng=79.8394783&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");

        const data = await menu.json();

        console.log(data);

        setListOfMenu(data);
    }

    if(listOfMenu === null)return <Shimmer />;



    const {name ,cuisines, avgRating ,totalRatingsString} = listOfMenu?.data?.cards[2]?.card?.card?.info;

    let {itemCards} = listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    if(itemCards === undefined){
        itemCards = listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    }  
   console.log(itemCards);
    
    return(

        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <ul>
                <li>{avgRating} stars , {"(" + totalRatingsString + ")"}</li>
            </ul>
            <ul>
                {itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;