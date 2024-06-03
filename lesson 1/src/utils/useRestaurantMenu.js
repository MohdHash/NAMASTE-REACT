import { useEffect, useState } from "react";


const useRestaurantMenu = (resId)=>{

    const[listOfMenu , setListOfMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =  async ()=>{
       
        const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.9625741&lng=79.8394783&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    
        const data = await menu.json();
    
        // console.log(data);

        setListOfMenu(data);
    }


    return listOfMenu;  
}

export default useRestaurantMenu;