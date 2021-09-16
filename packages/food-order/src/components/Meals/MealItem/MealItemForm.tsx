import React, { FC } from "react"
import { Input } from "../../UI"
import classes from "./MealItemForm.module.css"


export const MealItemForm: FC = () => {
  return (
    <form className={classes.form}>
      <Input label="Amount" id="amount" type="number" min="1" max="5" step="1" defaultValue="1" />
      <button>+ Add</button>
    </form>
  )
}
