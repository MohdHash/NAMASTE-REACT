import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load header component with login button", ()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>    
            </BrowserRouter>
        </Provider>
    )
   
    const button = screen.getByRole("button",{name:"Login"});

    expect(button).toBeInTheDocument();
    
})

it("should load header component with login button", ()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>    
            </BrowserRouter>
        </Provider>
    )
   
    const button = screen.getByRole("button",{name:"Login"});

    expect(button).toBeInTheDocument();
    
})

it("should have cart in the header component", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
})

it("should load header component with login button", ()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>    
            </BrowserRouter>
        </Provider>
    )
   
    const button = screen.getByRole("button",{name:"Login"});

    fireEvent.click(button);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
    
})

