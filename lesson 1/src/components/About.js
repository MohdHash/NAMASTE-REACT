import UserClass from "./UserClass.js";

const About = ()=>{

    const userInfo = {
        location:"Chennai",
        insta_id:"@m.hsimm",
        contact:"9952507593",
    }

    return(
        <div>
            <h1>
                Hello there!!👋
            </h1>
            <h2>
                Welcome to my Food Cart 🍔🛒
            </h2>
            

            <UserClass data={userInfo} />
           
        </div>
    )
};

export default About;