import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";


it("should load header component with login button", ()=>{
    render(
        <Provider store={appStore}>
            <Header/>
        </Provider>
    )
   
    
})