import { createContext } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    return (
        <DataContext.Provider value={{ name: 'John Doe' }}>
            {children}
        </DataContext.Provider>
    )

}

