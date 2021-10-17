import React, { FC } from "react"
import { Button } from "../ui"
import classes from "./CartItem.module.css"


interface Props {
  id: string
  title: string
  quantity: number
  total: number
  price: number
}

export const CartItem: FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <header>
        <h3>{ props.title }</h3>
        <div className={classes.price}>
          { `$${ props.total.toFixed(2) } ` }
          <span className={classes.itemprice}>
            { `$${props.price.toFixed(2)}/item` }
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{ props.quantity }</span>
        </div>
        <div className={classes.actions}>
          <Button
            data-action="subtract"
            data-product-id={props.id}
          >
            -
          </Button>
          <Button
            data-action="add"
            data-product-id={props.id}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  )
}
