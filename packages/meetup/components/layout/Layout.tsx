import classes from "./Layout.module.css"
import { FC } from "react"
import { MainNavigation } from "./MainNavigation"


export const Layout: FC = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{ props.children }</main>
    </div>
  )
}
