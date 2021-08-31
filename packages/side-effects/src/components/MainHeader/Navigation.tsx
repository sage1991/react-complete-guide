import React, { FC, MouseEvent } from "react"
import classes from "./Navigation.module.css"


interface NavigationProps {
  loggedIn: boolean
  logout: () => void
}

export const Navigation: FC<NavigationProps> = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {
          props.loggedIn &&
          <>
            <NavLink href="/">Users</NavLink>
            <NavLink href="/">Admin</NavLink>
            <NavButton onClick={props.logout}>Logout</NavButton>
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
