import React, { FC } from "react"
import { BasicForm, SimpleInput } from "./components"


export const App: FC = () => {
  return (
    <>
      <div className="app">
        <SimpleInput />
      </div>
      <div className="app">
        <BasicForm />
      </div>
    </>
  )
}
