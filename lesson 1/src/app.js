
import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import ApiContext from './utils/ApiContext';
import ApiProvider from './utils/ApiContext';
import SelectedApiProvider from './utils/SelectedApiContext';

const Grocery = lazy(()=> import("./components/Grocery"));


const AppLayout = ()=>{

    const[userName , setUserName] = useState("");
    // const[location,setLocation] = useState("");

    // const handleSelectLocation = (api)=>{
    //     setLocation(api);
    // }


    useEffect(()=>{

        //API CALL
        const data={
            info:"Mohamed Hashim",
        }

        setUserName(data.info);
    },[])

    return (
        <Provider store={appStore}>
            <ApiProvider>
                <SelectedApiProvider>
                    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
                    <div className="body">
                        <Header />
                        <Outlet />
                    </div>
                    </UserContext.Provider>
                </SelectedApiProvider>
            </ApiProvider>    
        </Provider>
       
       
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Wait a second...</h1>}><Grocery /></Suspense>,
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            },
        ],
        errorElement:<Error />,
    },
   
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);