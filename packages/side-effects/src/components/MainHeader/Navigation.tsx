import React, { FC, MouseEvent, useContext } from "react"
import { AuthContext } from "../../context"
import classes from "./Navigation.module.css"


export const Navigation: FC = (props) => {
  const auth = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {
          auth.loggedIn &&
          <>
            <NavLink href="/">Users</NavLink>
            <NavLink href="/">Admin</NavLink>
            <NavButton onClick={auth.logout}>Logout</NavButton>
          </>
        }
      </ul>
    </nav>
  )
}


interface NavLinkProps {
  href?: string
}

const NavLink: FC<NavLinkProps> = (props) => {
  return (
    <li>
      <a href={props.href}>{ props.children }</a>
    </li>
  )
}


interface NavButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const NavButton: FC<NavButtonProps> = (props) => {
  return (
    <li>
      <button onClick={props.onClick}>{ props.children }</button>
    </li>
  )
}
