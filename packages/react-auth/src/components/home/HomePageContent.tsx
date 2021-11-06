import React, { FC } from "react"
import classes from "./HomePageContent.module.css"


export const HomePageContent: FC = () => {
  return (
    <section className={classes.home}>
      <h1>Welcome on Board!</h1>
    </section>
  )
}
