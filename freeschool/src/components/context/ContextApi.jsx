import React, { createContext, useState } from 'react'


export const Api = createContext();
const ContextApi = ({children}) => {
    const [auth,setAuth] = useState('tutor');
    return (
        <Api.Provider value={{auth}}>{children}</Api.Provider>
    )
}

export default ContextApi
