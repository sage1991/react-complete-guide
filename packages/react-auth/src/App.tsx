import React from "react"
import { Layout } from "./components/layout"
import { Redirect, Route, Switch } from "react-router-dom"
import { AuthPage, HomePage, ProfilePage } from "./pages"
import { GuardedRoute } from "./components/route"


export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <GuardedRoute path="/profile">
          <ProfilePage />
        </GuardedRoute>
        <Redirect to="/home" />
      </Switch>
    </Layout>
  )
}
