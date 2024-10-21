import React from 'react'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
<AuthContext.Provider value={"anany"}>
    {children}

</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider