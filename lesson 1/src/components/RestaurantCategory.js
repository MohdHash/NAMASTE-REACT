import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{
    const{showItemList} = props;
    const{data} = props;
    const{eventHandle} = props;
    const[isActive , setisActive] =useState(false);
    const handleClick = ()=>{
        eventHandle();
        setisActive(!isActive);
    }
    // console.log(data);
    
    return(
       <div>
        <div  className=" bg-gray-100 mx-auto w-6/12 shadow-lg p-4 my-4 cursor-pointer">
            <div className="flex justify-between">
                <span className=" font-bold text-xl ">{data.title} ({data.itemCards.length})</span>
                <span onClick={handleClick} >🔽</span>
            </div>
            
            {showItemList && isActive ? <ItemList items={data.itemCards}/> : null}
        </div>
        
       </div>
       
    )
}
export default RestaurantCategory;