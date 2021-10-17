import React, { FC } from "react"
import { MainHeader } from "./MainHeader"


export const Layout: FC = (props) => {
  return (
    <>
      <MainHeader />
      <main>{ props.children }</main>
    </>
  )
}
