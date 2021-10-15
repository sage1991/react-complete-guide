import React, { FC } from "react"
import { useDispatch, useSelector } from "../../store"
import classes from "./Header.module.css"
import { actions } from "../../store/auth"
import { Button } from "../UI"


export const Header: FC = () => {
  const authenticated = useSelector<boolean>(({ auth }) => auth.authenticated)
  const dispatch = useDispatch()

  const onLogoutButtonClick = () => dispatch(actions.logout())

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        authenticated &&
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <Button onClick={onLogoutButtonClick}>Logout</Button>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}
