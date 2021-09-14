import React, { FC, useContext } from 'react'
import { Login } from "./components/Login"
import { Home } from "./components/Home"
import { MainHeader } from "./components/MainHeader"
import { AuthContext } from "./context"


export const App: FC = () => {
  const auth = useContext(AuthContext)

  return (
    <>
      <MainHeader />
      <main>
        { !auth.loggedIn && <Login /> }
        { auth.loggedIn && <Home /> }
      </main>
    </>
  )
}
