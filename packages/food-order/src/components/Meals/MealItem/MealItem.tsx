import React, { FC } from "react"
import classes from "./MealItem.module.css"
import { MealItemForm } from "./MealItemForm"


interface Props {
  name: string
  description: string
  price: number
}

export const MealItem: FC<Props> = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{ props.name }</h3>
        <div className={classes.description}>{ props.description }</div>
        <div className={classes.price}>{ `$${props.price.toFixed(2)}` }</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}
