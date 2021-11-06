import React, { FC, useCallback, useState } from "react"


interface Auth {
  token: string
  refreshToken: string
  isLoggedIn: boolean
  login: (token: string, refresh: string) => void
  logout: () => void
}

export const AuthContext = React.createContext<Auth>({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
})


const AUTH_TOKEN = localStorage.getItem("access_token") ?? "";
const REFRESH_TOKEN = localStorage.getItem("refresh_token") ?? "";


export const AuthProvider: FC = (props) => {
  const [ token, setToken ] = useState<string>(AUTH_TOKEN)
  const [ refreshToken, setRefreshToken ] = useState<string>(REFRESH_TOKEN)
  const isLoggedIn = !!token && !!refreshToken

  const login = useCallback((token: string, refresh: string) => {
    setToken(token)
    setRefreshToken(refresh)
    localStorage.setItem("access_token", token)
    localStorage.setItem("refresh_token", refresh)
  }, [ setToken ])

  const logout = useCallback(() => {
    setToken("")
    setRefreshToken("")
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
  }, [ setToken ])

  return (
    <AuthContext.Provider value={{ token, refreshToken, isLoggedIn, login, logout }}>
      { props.children }
    </AuthContext.Provider>
  )
}
