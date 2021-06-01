import React, { FC } from "react";
import { Card } from "../Card";
import classes from "./AddUser.module.css";
import { Button } from "../Button";


export const AddUser: FC = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Card className={classes.form}>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">
          Add User
        </Button>
      </form>
    </Card>
  )
}
