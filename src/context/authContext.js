import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

const authContext = createContext()

const AuthorProvider = ({children}) => {
    
    const [ auth, setAuth ] = useState({
        isAuthenticated: false,
        user: null
    })
    const user = {
        _id: '1',
        username: 'thinh',
        password: '123'
    }

    const data = { auth, user }

    return (
      <authContext.Provider value={data}>
          {children}
      </authContext.Provider>
    )
}


export { authContext, AuthorProvider }
