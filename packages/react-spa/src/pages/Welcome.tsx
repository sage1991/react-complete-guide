import React, { FC } from "react"
import { Route } from "react-router-dom"


export const Welcome: FC = () => {
  return (
    <section>
      <h1>Welcome!</h1>
      <Route path="/welcome/new-user">
        <p>New User!</p>
      </Route>
    </section>
  )
}
