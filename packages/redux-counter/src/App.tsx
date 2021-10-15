import React, { FC } from "react"
import { Counter } from "./components/Counter"
import { Provider } from "react-redux"
import { store, useSelector } from "./store"
import { Header } from "./components/Header"
import { Auth } from "./components/Auth"
import { UserProfile } from "./components/User"


export const App: FC = () => {
  const authenticated = useSelector<boolean>(({ auth }) => auth.authenticated)

  return (
    <>
      <Header />
      {
        authenticated
          ? <UserProfile />
          : <Auth />
      }
      <Counter />
    </>
  )
}


export const ApplicationContext: FC = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
