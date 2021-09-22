import React, { FC } from "react"
import { Card } from "../UI"
import { useCounter } from "../../hooks"


export const ForwardCounter: FC = () => {
  const counter = useCounter(1, 1000)
  return (
    <Card>{ counter }</Card>
  )
}
