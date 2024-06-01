import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases",()=>{
    test("Should load the contact component",()=>{

        render(<Contact />);  // render the component in jsdom
    
       const heading = screen.getAllByRole("heading");
    
       expect(heading.length).toBe(2);
    
    
    })
    
    test("Should load button the contact component",()=>{
    
        render(<Contact />);  // render the component in jsdom
    
       const button = screen.getByRole("button");
    
       expect(button).toBeInTheDocument();
    
    
    })
    
    test("Should load input name the contact component",()=>{
    
        render(<Contact />);  // render the component in jsdom
    
       const inputName = screen.getByPlaceholderText("name");  // returns an array of react element(objects)
    
       expect(inputName).toBeInTheDocument();
    
    
    });
    
    test("should load two text boxes",()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    })
})



