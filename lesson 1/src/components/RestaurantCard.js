import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props)=>{

    const { resData } = props;
    const{ name ,avgRating } = resData?.info;
    return(
        
        <div className='res-card'>
            <img 
                className='res-logo'
                alt='res-logo'
                src={RES_LOGO+resData.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            {/* <span><FontAwesomeIcon icon="fa-regular fa-star" /></span> */}
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>      
        </div>
    )
}

export default RestaurantCard;