import React, { FC, useRef } from "react"
import classes from "./TaskForm.module.css"


interface Props {
  loading: boolean
  addTask: (task: string) => void
}

export const TaskForm: FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const task = inputRef.current!.value.trim()
    if (task) {
      props.addTask(task)
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" />
      <button>{ props.loading ? "Sending..." : "Add Task" }</button>
    </form>
  )
}
