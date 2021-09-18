import React, { FC } from "react"
import { Modal } from "../UI"
import { useCart } from "../../store/cart"
import { CartItem } from "./CartItem"
import { CartItemModel } from "../../model"
import classes from "./Cart.module.css"


interface Props {
  show: boolean
  hide: () => void
}

export const Cart: FC<Props> = (props) => {
  const cart = useCart()

  const onAddClick = (model: CartItemModel) => () => {
    cart.addItem({ ...model, amount: 1 })
  }

  const onRemoveClick = (model: CartItemModel) => () => {
    cart.removeItem(model.id)
  }

  return (
    <Modal show={props.show}>
      <ul className={classes["cart-items"]}>
        {
          cart.items.map(item => {
            return (
              <CartItem key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onAddClick={onAddClick(item)}
                        onRemoveClick={onRemoveClick(item)}/>
            )
          })
        }
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ cart.totalAmount }</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hide}>Close</button>
        { cart.items.length > 0 && <button className={classes.button}>Order</button> }
      </div>
    </Modal>
  )
}
