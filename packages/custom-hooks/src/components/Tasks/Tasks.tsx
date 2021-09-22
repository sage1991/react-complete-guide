import React, { FC, ReactNode } from "react"
import { Section } from "../UI"
import { Task } from "../../model"
import { TaskItem } from "./TaskItem"
import classes from "./Tasks.module.css"


interface Props {
  items: Task[]
  loading: boolean
  error: string | null
  refresh: () => void
}

export const Tasks: FC<Props> = (props) => {

  let contents: ReactNode = <h2>No tasks found. Start adding some!</h2>
  if (props.loading) {
    contents = <p>Loading tasks...</p>
  } else if (props.error) {
    contents = <button onClick={props.refresh}>Try again</button>
  } else if (props.items.length > 0) {
    contents = (
      <ul>
        { props.items.map(({ id, text }) => <TaskItem key={id}>{ text }</TaskItem>) }
      </ul>
    )
  }

  return (
    <Section>
      <div className={classes.container}>
        { contents }
      </div>
    </Section>
  )
}
