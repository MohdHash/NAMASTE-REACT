import RestaurantCard ,{withVegLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useRestaurantList from "../utils/useRestaurantList";
import { SelectedApiContext } from "../utils/SelectedApiContext";


const Body = ()=>{
    const {selectedApi} = useContext(SelectedApiContext)
    
    //  Local State variable 
    const[copyResList , setCopyResList] = useState([]);
    const restaurantList = useRestaurantList(setCopyResList,selectedApi);

    const[searchText,setSearchText] = useState("")
    const{setUserName,loggedInUser} = useContext(UserContext);
    

    

   

    const handleEnterSearch = ()=>{
      const filteredList = restaurantList.filter((res)=>{
        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
      })

      setCopyResList(filteredList)
    }

    const handleVegClick = ()=>{
      const filterList = restaurantList.filter((res)=>{
        return res.info.veg == true;
      })

      setCopyResList(filterList);
    }

    //Higher Order Component
    const VegRestaurantCard = withVegLabel(RestaurantCard);
    
   

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
      return(
        <h1>You are offline. Please check your internet connection</h1>
      )
    }

    //conditional rendering
    // copyResList.length === 0 ? <Shimmer /> :
    return  (
        <div className='body-container'>
            <div className='body-head m-4'>
                <div className="filter flex items-center">
                  <div className="search">

                    <input 
                      type="text" 
                      className="search-box border border-black px-[2px] m-4" 
                      data-testid="inputBox"
                      value={searchText} 
                      onChange={ (e)=>{
                      setSearchText(e.target.value);
                    }}
                      onKeyDown={(e)=>{if(e.key === 'Enter')handleEnterSearch()}} 
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

                    <button className="filter-btn ml-10 px-3 py-1 rounded-md bg-gray-400 bg-opacity-30"
                      onClick={handleVegClick}
                    >
                      Veg Restaurant
                    </button>

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