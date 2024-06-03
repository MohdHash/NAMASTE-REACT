import {  createContext } from "react";


export const ApiContext = createContext();

const ApiProvider = ({children})=>{
    const ApiLinks = {
        coimbatore:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        chennai:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        puducherry:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9625741&lng=79.8394783&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    }

    return(
        <ApiContext.Provider value={ApiLinks}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;

