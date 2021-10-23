import React, { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./QuoteItem.module.css"


interface Props {
  id: string | number
  text: string
  author: string
}

export const QuoteItem: FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{ props.text }</p>
        </blockquote>
        <figcaption>{ props.author }</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  )
}
