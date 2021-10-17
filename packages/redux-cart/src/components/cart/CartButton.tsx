import React, { FC } from "react"
import classes from "./CartButton.module.css"
import { Button } from "../ui"
import { useUI } from "../../context"
import { useSelector } from "../../store"


export const CartButton: FC = (props) => {
  const { showCart, isShowCart } = useUI()
  const totalQuantity  = useSelector(state => state.cart.totalQuantity)

  return (
    <Button className={classes.button} onClick={() => showCart(!isShowCart)}>
      <span>My Cart</span>
      <span className={classes.badge}>
        { totalQuantity }
      </span>
    </Button>
  )
}
