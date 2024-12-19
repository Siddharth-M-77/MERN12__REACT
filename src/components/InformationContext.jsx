import React, { createContext, useState } from 'react'

export const dataContext = createContext(null)
const InformationContext = ({ children }) => {
    //1st create context
    //2nd provide data or create global data 
    //3rd wrap the children and send value to children with provider  
    //4rth done✅

    const [data, setData] = useState("I am DataContext")
    return (
        <dataContext.Provider value={[data, setData]}>
            {children}
        </dataContext.Provider>
    )
}

export default InformationContext
