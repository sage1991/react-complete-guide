import React, { FC } from "react"
import classes from './CartItem.module.css';


interface Props {
  name: string
  price: number
  amount: number
  onRemoveClick: (e: React.MouseEvent) => void
  onAddClick: (e: React.MouseEvent) => void
}

export const CartItem: FC<Props> = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{ props.name }</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{ props.price.toFixed(2) }</span>
          <span className={classes.amount}>x { props.amount }</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemoveClick}>−</button>
        <button onClick={props.onAddClick}>+</button>
      </div>
    </li>
  )
}
