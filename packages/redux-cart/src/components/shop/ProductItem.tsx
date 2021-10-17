import React, { FC } from "react"
import { Card, Button } from "../ui"
import classes from "./ProductItem.module.css"


interface Props {
  id: string
  title: string
  price: number
  description: string
}

export const ProductItem: FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{ props.title }</h3>
          <div className={classes.price}>
            { `$${props.price.toFixed(2)}` }
          </div>
        </header>
        <p>{ props.description }</p>
        <div className={classes.actions}>
          <Button data-product-id={props.id}>Add To Cart</Button>
        </div>
      </Card>
    </li>
  )
}
