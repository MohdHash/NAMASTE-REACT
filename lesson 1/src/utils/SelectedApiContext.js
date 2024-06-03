import { createContext, useState } from "react";

export const SelectedApiContext = createContext();

const SelectedApiProvider = ({children}) => {
    const [selectedApi , setSelectedApi] = useState("");

    return(
        <SelectedApiContext.Provider value={{selectedApi,setSelectedApi}}>
            {children}
        </SelectedApiContext.Provider>
    );
};

export default SelectedApiProvider;