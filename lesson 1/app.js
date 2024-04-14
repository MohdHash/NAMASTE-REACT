
import React from 'react';

import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






/**
 * 
 * Header
 *  -Logo
 *  -Nav items 
 * Body 
 *  -search 
 *  -Restaurant container 
 *     -RestaurantCards 
 * Footer 
 *  -Copyright
 *  -address
 *  -contacts 
 *  -Links
 * 
 */
const Header = ()=>{
    return (
        <div className="header">
            <div className="img-container">
                <img src='https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png'>
                </img>
            </div>

            <div className="nav-items">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><img src='https://i.pinimg.com/736x/d6/39/07/d6390726609aa16dddbb604a7d5afe19.jpg'></img></li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className='res-card'>
            <img 
                className='res-logo'
                alt='res-logo'
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/9c56708a-5fd3-479e-8bad-563e60c3cc79_140880.jpg'
            ></img>
            <h3>MacDonald's</h3>
            <span><FontAwesomeIcon icon="fa-regular fa-star" /></span>
            <span>4.3</span>
            <span>25-30 mins</span>      
        </div>
    )
}

const Body = ()=>{
    return(
        <div className='body-container'>
            <div className='searchBar'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />


            </div>
        </div>

    )
}

const AppLayout = ()=>{
    return (
        <div className="body">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



