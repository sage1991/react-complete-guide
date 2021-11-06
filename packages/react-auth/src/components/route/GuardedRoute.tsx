import React, { FC } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "../../store"


export const GuardedRoute: FC<RouteProps> = (props) => {
  const auth = useAuth()
  if (auth.isLoggedIn) {
    return <Route {...props} />
  }
  return <Redirect to="/auth" />
}
