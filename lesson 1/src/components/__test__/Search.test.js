import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "./mocks/mockResList.json"
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search restaurant list for bar",async ()=>{

    await act(async () => 
        render(<BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const SearchBtn = screen.getByRole("button",{name:"Search"});

    const inputBox = screen.getByTestId("inputBox");

    fireEvent.change(inputBox,{target:{ value : ""}});

    fireEvent.click(SearchBtn)

    const card = screen.getAllByTestId("resCard");

    expect(card.length).toBe(20);

});

it("should test the top rated filter button", async ()=>{
    await act(async ()=> {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const topRatedButton = screen.getByRole("button",{name:"Top Rated"});

    fireEvent.click(topRatedButton);

    const topRatedResCard = screen.getAllByTestId("resCard");

    expect(topRatedResCard.length).toBe(7);

    

});

