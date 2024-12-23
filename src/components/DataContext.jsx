import React, { createContext, useState } from 'react'

export const dataContext = createContext(null)
const dataContextProvider = ({ children }) => {

    const [data, setData] = useState("I am DataContext")
    return (
        <dataContext.Provider value={[data, setData]}>
            {children}
        </dataContext.Provider>
    )
}
export default dataContextProvider;


