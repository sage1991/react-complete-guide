import React, { FC } from "react"
import { Navigation } from "./Navigation"
import classes from "./MainHeader.module.css"


export const MainHeader: FC = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  )
}
