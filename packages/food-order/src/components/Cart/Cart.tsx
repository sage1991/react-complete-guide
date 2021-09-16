import React, { FC } from "react"
import { Modal } from "../UI"
import classes from "./Cart.module.css"


interface Props {
  show: boolean
  hide: () => void
}

export const Cart: FC<Props> = (props) => {
  const cartItems: any[] = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Sushi", amount: 2, price: 12.99 },
  ]

  return (
    <Modal show={props.show}>
      <ul className={classes["cart-items"]}>
        { cartItems.map((item) => <li key={item.id}>{ item.name }</li>) }
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hide}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
