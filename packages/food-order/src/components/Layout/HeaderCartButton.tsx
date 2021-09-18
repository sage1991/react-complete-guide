import React, { FC, useEffect, useState } from "react"
import { CartIcon } from "../Cart"
import { useCart } from "../../store/cart"
import classes from "./HeaderCartButton.module.css"
import clsx from "clsx"


interface Props {
  onClick?: (e: React.MouseEvent) => void
}

export const HeaderCartButton: FC<Props> = (props) => {
  const cart = useCart()
  const numberOfCartItems = cart.items.reduce((acc, item) => acc + item.amount, 0)
  const [ animation, setAnimation ] = useState<boolean>(false)

  useEffect(() => {
    setAnimation(cart.items.length > 0)
  }, [ cart.items ])

  const onBumpAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === classes.bump) setAnimation(false)
  }

  return (
    <button className={clsx(classes.button, animation && classes.bump)}
            onClick={props.onClick}
            onAnimationEnd={onBumpAnimationEnd}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>{ numberOfCartItems }</span>
    </button>
  )
}
