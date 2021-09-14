import React, { FC, useContext } from "react"
import { Card } from "../UI/Card"
import { AuthContext } from "../../context"
import { Button } from "../UI/Button"
import classes from "./Home.module.css"


export const Home: FC = () => {
  const auth = useContext(AuthContext)

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={auth.logout}>Logout</Button>
    </Card>
  )
}
