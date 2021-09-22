import React, { FC } from "react"
import { Section } from "../UI"
import { TaskForm } from "./TaskForm"
import { addTask } from "../../api/task"
import { Task } from "../../model"
import { useAPI } from "../../hooks"


interface Props {
  onAddTask: (task: Task) => void
}

export const NewTask: FC<Props> = (props) => {
  const { loading, error, api } = useAPI(addTask)

  const addTaskHandler = async (text: string) => {
    const response = await api({ text })
    props.onAddTask({ id: response.name, text })
  }

  return (
    <Section>
      <TaskForm loading={loading} addTask={addTaskHandler} />
      { error && <p>{ error }</p> }
    </Section>
  )
}
