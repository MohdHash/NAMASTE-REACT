import { faPersonMilitaryToPerson } from "@fortawesome/free-solid-svg-icons";
import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props)=>{

    const { resData } = props;
    const{ name ,avgRating } = resData?.info;
    return(
        
        <div className='res-card  m-4 p-4 w-[250px] h-[400px]  transition ease-in-out  hover:scale-105 rounded-lg  bg-orange-50 hover:bg-orange-100'>
            <img 
                className='res-logo h-[250px] mb-1 rounded-lg'
                alt='res-logo'
                src={RES_LOGO+resData.info.cloudinaryImageId}
            />
            <h3 className=" font-semibold pt-3">{name}</h3>
            {/* <span><FontAwesomeIcon icon="fa-regular fa-star" /></span> */}
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>      
        </div>
    )
}


export const withVegLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
           <div className=" hover:scale-105">
            <label className=" absolute bg-gray-600 text-white m-2 p-2 rounded-md z-10 "> Veg </label>
            <RestaurantCard {...props}/>
           </div>
        )
    }
}

export default RestaurantCard;