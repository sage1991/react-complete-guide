import React, { FC } from "react"
import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../store"


export const MainNavigation: FC = () => {
  const auth = useAuth()

  let menu: JSX.Element = (
    <li>
      <Link to="/auth">Login</Link>
    </li>
  )

  if (auth.isLoggedIn) {
    menu = (
      <>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      </>
    )
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          { menu }
        </ul>
      </nav>
    </header>
  )
}
