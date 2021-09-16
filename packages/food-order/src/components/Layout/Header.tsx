import React, { FC } from "react"
import { MealImage } from "../../assets"
import { HeaderCartButton } from "./HeaderCartButton"
import classes from "./Header.module.css"


interface Props {
  showCart: () => void
}

export const Header: FC<Props> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="a table full of delicious food!" />
      </div>
    </>
  )
}
