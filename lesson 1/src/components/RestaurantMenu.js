
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{
     const {resId} = useParams();

    const listOfMenu  = useRestaurantMenu(resId);
    
    const[showIndex,setShowIndex] = useState(null);

    if(listOfMenu === null)return <Shimmer />;



    const {name ,cuisines, avgRating ,totalRatingsString} = listOfMenu?.data?.cards[2]?.card?.card?.info;

    let {itemCards} = listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    if(itemCards === undefined){
        itemCards = listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    }  

    // console.log(listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = listOfMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);
    
    return(

        <div className="menu text-center">
            <h1 className=" font-bold text-2xl">{name}</h1>
            <p className="text-lg">{cuisines.join(", ")}</p>


            
            {
                categories.map((category,index)=>(
                    <RestaurantCategory 
                        key={category?.card?.card?.itemCards[0]?.card?.info?.id} 
                        data={category?.card?.card}
                        showItemList={showIndex === index ? true : false}
                        eventHandle={()=>{
                            setShowIndex(index);                  
                        }}
                    />
                ))
            }
          
            {/* <ul>
                {itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul> */}
        </div>
    );  
};

export default RestaurantMenu;