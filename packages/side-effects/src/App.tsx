import React, { FC, useState } from 'react'
import { Login } from "./components/Login"
import { Home } from "./components/Home"
import { MainHeader } from "./components/MainHeader"


export const App: FC = () => {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false)

  const login = (email: string, password: string) => setLoggedIn(true)
  const logout = () => setLoggedIn(false)

  return (
    <>
      <MainHeader loggedIn={loggedIn} logout={logout} />
      <main>
        { !loggedIn && <Login login={login} /> }
        { loggedIn && <Home logout={logout} /> }
      </main>
    </>
  )
}
