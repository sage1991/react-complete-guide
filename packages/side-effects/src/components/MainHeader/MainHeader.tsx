import React, { FC } from "react"
import { Navigation } from "./Navigation"
import classes from "./MainHeader.module.css"


interface Props {
  loggedIn: boolean
  logout: () => void
}

export const MainHeader: FC<Props> = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation {...props} />
    </header>
  )
}
