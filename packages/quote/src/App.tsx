import React, { FC } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { AllQuotes, NewQuote, NotFound, QuoteDetail } from "./pages"
import { Layout } from "./components/layout/Layout"


export const App: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route exact path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect exact path="/" to="/quotes" />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  )
}
