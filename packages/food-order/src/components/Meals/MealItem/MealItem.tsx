import React, { FC } from "react"
import { MealItemForm } from "./MealItemForm"
import { useCart } from "../../../store/cart"
import classes from "./MealItem.module.css"


interface Props {
  id: string
  name: string
  description: string
  price: number
}

export const MealItem: FC<Props> = (props) => {
  const cart = useCart()

  const addToCart = (amount: number) => cart.addItem({
    id: props.id,
    name: props.name,
    price: props.price,
    amount: amount
  })

  return (
    <li className={classes.meal}>
      <div>
        <h3>{ props.name }</h3>
        <div className={classes.description}>{ props.description }</div>
        <div className={classes.price}>{ `$${props.price.toFixed(2)}` }</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCart} />
      </div>
    </li>
  )
}
