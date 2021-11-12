import React, { FC } from "react"
import classes from "./MeetupDetails.module.css"


interface Props {
  title: string
  image: string
  address: string
  description: string
}

export const MeetupDetails: FC<Props> = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt=""/>
      <h1>{ props.title }</h1>
      <address>{ props.address }</address>
      <p>{ props.description }</p>
    </section>
  )
}
