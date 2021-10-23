import React, { FC } from "react"
import classes from "./CommentItem.module.css"


interface Props {
  text: string
}

export const CommentItem: FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <p>{ props.text }</p>
    </li>
  )
}
