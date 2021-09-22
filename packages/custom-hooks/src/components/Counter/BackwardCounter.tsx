import React, { FC } from "react"
import { Card } from "../UI"
import { useCounter } from "../../hooks"


export const BackwardCounter: FC = () => {
  const counter = useCounter(-1, 2000)
  return (
    <Card>{ counter }</Card>
  )
}
