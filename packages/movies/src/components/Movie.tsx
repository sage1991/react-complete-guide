import React, { FC } from "react"
import classes from "./Movie.module.css"


interface Props {
  title: string
  releaseDate: string
  openingText: string
}

export const Movie: FC<Props> = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{ props.title }</h2>
      <h3>{ props.releaseDate }</h3>
      <p>{ props.openingText }</p>
    </li>
  )
}
