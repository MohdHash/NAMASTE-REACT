import { useContext, useEffect, useState } from "react"
import {ApiContext }from "./ApiContext";



const useRestaurantList = (setCopyResList,selectedApi)=>{
    const [restaurantList,setRestaurantList] = useState(null);

    console.log(selectedApi);
    
    

    useEffect(()=>{
        if(selectedApi){
            const fetchData = async ()=>{
                const data = await fetch(selectedApi);
                const json = await data.json();
                
                setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setCopyResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                
            }

            fetchData();
        }
    },[selectedApi])

    return restaurantList;
}

export default useRestaurantList;