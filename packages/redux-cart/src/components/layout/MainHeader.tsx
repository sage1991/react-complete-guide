import React, { FC } from "react"
import { CartButton } from "../cart"
import classes from "./MainHeader.module.css"


export const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
