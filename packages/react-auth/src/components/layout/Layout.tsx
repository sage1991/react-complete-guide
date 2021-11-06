import React, { FC } from "react"
import { MainNavigation } from "./MainNavigation"


export const Layout: FC = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{ props.children }</main>
    </>
  )
}
