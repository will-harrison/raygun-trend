import { createContext, useState } from 'react'

const UserContext = createContext(undefined)
const UserDispatchContext = createContext(undefined)

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({})

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext value={setUserDetails}>
        {children}
      </UserDispatchContext>
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext, UserDispatchContext }