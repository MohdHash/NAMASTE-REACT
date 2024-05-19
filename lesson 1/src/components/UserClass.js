import React from "react";

class UserClass extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            userinfo:{
                login:"Default",
                avatar_url:"Default",
            }
        }

      console.log(this.props.name,"constructor called");
    }

    componentDidMount(){
        const fetchData = async ()=>{
            const data = await fetch("https://api.github.com/users/MohdHash");
            const json = await data.json();

            this.setState({
                userinfo:json,
            })
        }
        
        fetchData();
    }

   

    render(){
      

        console.log(this.props.name,"rendered");

        const {location,insta_id,contact} = this.props.data
        
        const {login ,avatar_url} = this.state.userinfo;
        
        return(
            
            <div className="user-card">
                <img src={avatar_url}></img>
                <h1>
                   Name:{login}
                </h1>
                <h3>
                    Location:{location}
                </h3>
                <h3>
                    Contact: {contact}
                </h3>
                <h3>
                    insta_id:{insta_id}
                </h3>
            </div>
        )
    }
}

export default UserClass;