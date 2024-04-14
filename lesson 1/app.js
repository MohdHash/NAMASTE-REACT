
import React from 'react';

import ReactDOM from "react-dom/client";

// React Element => Object



// JSX => React.createElement => ReactElement - JS object => HTMLelement(render)
// React element
// const jsxheading = <h1 id='heading'>HashimFazeela </h1>;

//React componSent 
//class based component (old)
// functional components (new)
const Small = () => (
   <h1>
    Namaste React
   </h1>
);

//component composition
const HeadingComponent = () => (
    <div id="container">
        <Small />  
        <h1 id="heading">HashimFazeela</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

