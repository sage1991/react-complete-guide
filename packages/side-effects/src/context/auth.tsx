import React, { FC, useEffect, useState } from "react"


interface Auth {
  loggedIn: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

// @ts-ignore
export const AuthContext = React.createContext<Auth>()

export const AuthContextProvider: FC = (props) => {
  const [ loggedIn, setLogin ] = useState<boolean>(false)

  useEffect(() => {
    const accountJSON = localStorage.getItem("account")
    if (accountJSON) {
      setLogin(true)
    }
  }, [])

  const login = (email: string, password: string) => {
    localStorage.setItem("account", JSON.stringify({ email, password }))
    setLogin(true)
  }

  const logout = () => {
    localStorage.removeItem("account")
    setLogin(false)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      { props.children }
    </AuthContext.Provider>
  )
}
