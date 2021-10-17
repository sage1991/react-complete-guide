import React, { FC } from "react"
import classes from "./Cart.module.css"
import { Card } from "../ui"
import { CartItem } from "./CartItem"
import { addItem, removeItem, useDispatch, useSelector } from "../../store"


const isEventTargetActionButton = (target: HTMLElement) => target.matches("[data-action]")

export const Cart: FC = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const onActionButtonClick = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isEventTargetActionButton(e.target as HTMLElement)) return

    const { action, productId } = (e.target as HTMLElement).dataset
    const item = items.find((__item) => __item.id === productId)!
    const { id, title, price } = item

    if (action === "add") {
      dispatch(addItem({ id, title, price }))
      return
    }

    dispatch(removeItem(id))
  }

  const cartItems = items.map((item) => <CartItem key={item.id} {...item} />)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul onClick={onActionButtonClick}>
        { cartItems }
      </ul>
    </Card>
  )
}
