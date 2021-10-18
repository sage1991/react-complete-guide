import React, { FC } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { Welcome } from "./pages/Welcome"
import { Products } from "./pages/Products"
import { MainHeader } from "./components/header"
import { ProductDetail } from "./pages/ProductDetail"


export const App: FC = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Redirect path="/" exact to="/welcome" />
        </Switch>
      </main>
    </>
  )
}
