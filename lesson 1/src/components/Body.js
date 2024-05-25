import RestaurantCard ,{withVegLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{
    //  Local State variable 
    const [restaurantList , setRestaurantList] = useState([]);

    const[searchText,setSearchText] = useState("")

    const[copyResList , setCopyResList] = useState([]);

    const{setUserName,loggedInUser} = useContext(UserContext);
    

    useEffect(()=>{
      fetchData();
    }, []);

    // console.log(restaurantList);

    const VegRestaurantCard = withVegLabel(RestaurantCard);
    
    const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9625741&lng=79.8394783&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      // console.log(json);
      //optional chaining
      setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setCopyResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
      return(
        <h1>You are offline. Please check your internet connection</h1>
      )
    }

    //conditional rendering
    return copyResList.length === 0 ? <Shimmer /> : (
        <div className='body-container'>
            <div className='body-head m-4'>
                <div className="filter flex items-center">
                  <div className="search">

                    <input 
                      type="text" 
                      className="search-box border border-black px-[2px] m-4" 
                      value={searchText} 
                      onChange={ (e)=>{
                      setSearchText(e.target.value);
                    }} 
                    />

                    <button 
                      className="search-btn px-3 py-1 rounded-md bg-green-200 mr-2" 
                      onClick={()=>{
                        const filteredList = restaurantList.filter((res)=>{
                          return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })

                        setCopyResList(filteredList)
                      }}
                    >
                      Search
                    </button>

                  </div>


                    <button className="filter-btn ml-10 px-3 py-1 rounded-md bg-gray-400 bg-opacity-30" 
                    onClick={()=>{
                        const filteredList = restaurantList.filter(
                            (res)=>{
                                return res.info.avgRating > 4.3;
                            }
                        );
                        setCopyResList(filteredList);
                    }}>Top Rated</button>

                <label>UserName</label>
                <input type="text"   onKeyDown={(e)=>{if(e.key === 'Enter')setUserName(e.target.value)}}/>
                </div>


            </div>
            <div className='res-container m-4 flex flex-wrap'>
                {
                  copyResList.map((restaurant) =>(
                   <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} >
                    {
                      restaurant?.info?.veg == null ? <RestaurantCard resData={restaurant}/> : <VegRestaurantCard resData={restaurant} />
                    }
                    </Link> 
                  ))

                }
            </div>
        </div>

    )
}

export default Body;