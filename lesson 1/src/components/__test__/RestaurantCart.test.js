import { render, screen } from "@testing-library/react"
import RestaurantCard, { withVegLabel } from "../RestaurantCard"
import MOCK_DATA from "./mocks/resCardMockData.json";
import "@testing-library/jest-dom";
it("should load the restaurant card " , () =>{
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})

it("should render the withpromoted higher order component",() =>{
    const VegResCar = withVegLabel(RestaurantCard);

    render(<VegResCar resData={MOCK_DATA}/>);

    const vegLabel = screen.getByText("Veg");

    expect(vegLabel).toBeInTheDocument();


    
})