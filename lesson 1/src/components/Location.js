import { useContext, useState } from "react"
import { ApiContext } from "../utils/ApiContext"
import { SelectedApiContext } from "../utils/SelectedApiContext";

const Location = () => {
    const{selectedApi , setSelectedApi} = useContext(SelectedApiContext);
    const ApiLinks = useContext(ApiContext);
    const[showLocationList , setShowLocationList] = useState(false);
    const[LocationName , setLocationName] = useState("Puducherry");
    return(
        <div>
            <div className="cursor-pointer " onClick={()=>setShowLocationList(!showLocationList)}>
                {LocationName}
            </div>

            <div className={` absolute bg-gray-100 ${showLocationList ? 'block' : 'hidden'}`} >
                <ul>
                    {
                        Object.keys(ApiLinks).map(location => (
                            <li key={location}>
                                <button onClick={()=>(setSelectedApi(ApiLinks[location]),
                                setLocationName(location.charAt(0).toUpperCase()+location.slice(1)),
                                setShowLocationList(!showLocationList)
                                )}>
                                    {location.charAt(0).toUpperCase()+location.slice(1)}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Location;