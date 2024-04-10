//nexted html elements
/*
<div id="parent">
    <div id ="child">
        <h1></h1>
    </div>

</div>
*/

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h2",{},"im an h2 tag")]

    ),React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h2",{},"im an h2 tag")]

    )]
);

// const heading = React.createElement("h1",{id:"heading"},"hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(parent);  // returns an object 
root.render(parent); // take the object and convert into h1 tag and render it to the root.