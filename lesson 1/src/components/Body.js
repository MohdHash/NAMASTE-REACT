import RestaurantCard from "./RestaurantCard";

import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    //  Local State variable 
    const [restaurantList , setRestaurantList] = useState([]);

    const[searchText,setSearchText] = useState("")

    const[copyResList , setCopyResList] = useState([]);

    useEffect(()=>{
      fetchData();
    }, []);

    

    const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9625741&lng=79.8394783&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);
      //optional chaining
      setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setCopyResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering
    return copyResList.length === 0 ? <Shimmer /> : (
        <div className='body-container'>
            <div className='body-head'>
                <div className="filter">
                  <div className="search">
                    <input 
                      type="text" 
                      className="search-box" 
                      value={searchText} 
                      onChange={ (e)=>{
                      setSearchText(e.target.value);
                    }} 
                    />

                    <button 
                      className="search-btn" 
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
                    <button className="filter-btn" 
                    onClick={()=>{
                        const filteredList = restaurantList.filter(
                            (res)=>{
                                return res.info.avgRating > 4.3;
                            }
                        );
                        setCopyResList(filteredList);
                    }}>Top Rated</button>
                </div>
            </div>
            <div className='res-container'>
                {
                  copyResList.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
                  ))
                }
            </div>
        </div>

    )
}

export default Body;