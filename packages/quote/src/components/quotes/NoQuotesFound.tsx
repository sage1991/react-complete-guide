import React, { FC } from "react"
import classes from "./NoQuotesFound.module.css"


export const NoQuotesFound: FC = () => {
  return (
    <div className={classes["no-quotes"]}>
      <p>No quotes found!</p>
      <a href="" className="btn">
        Add a Quote
      </a>
    </div>
  )
}
