import React, { FC } from "react"
import { CartIcon } from "../Cart"
import classes from "./HeaderCartButton.module.css"


interface Props {
  onClick?: (e: React.MouseEvent) => void
}

export const HeaderCartButton: FC<Props> = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}
