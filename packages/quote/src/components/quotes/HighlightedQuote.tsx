import React, { FC } from "react"
import classes from "./HighlightedQuote.module.css"


interface Props {
  text: string
  author: string
}

export const HighlightedQuote: FC<Props> = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{ props.text }</p>
      <figcaption>{ props.author }</figcaption>
    </figure>
  )
}
