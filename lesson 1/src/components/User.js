import { useState } from "react";

const User = (props) =>{
    const{name,location}=props;
   
    const [count,setCount] = useState(0);
    return(
        <div className="user-card">
            <button 
                onClick={()=>{
                    setCount(count+1);
                }}>     
            click to increase
            </button>
            <h1>
                Count:{count}
            </h1>
            <h1>
               Name:{name}
            </h1>
            <h3>
                Location:{location}
            </h3>
            <h3>
                Contact: @m.hsimm
            </h3>
        </div>
    )
}

export default User;