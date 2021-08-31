import React, { FC } from "react"
import { Card } from "../UI/Card"
import classes from "./Home.module.css"


interface Props {
  logout: () => void
}

export const Home: FC<Props> = () => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  )
}
