import classes from "./MainNavigation.module.css"
import { FC } from "react"
import Link from "next/link"


export const MainNavigation: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/meetup/new">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
