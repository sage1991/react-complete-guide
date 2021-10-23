import React, { FC } from "react"
import { MainNavigation } from "./MainNavigation"
import classes from "./Layout.module.css"


export const Layout: FC = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        { props.children }
      </main>
    </>
  )
}
